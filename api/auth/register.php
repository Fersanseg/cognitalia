<?php
require '../../vendor/autoload.php';
require_once '../connection.php';
require '../headers.php';
include '../tokenHandler.php';

$dbConnection = connect();

$submittedCredentials = json_decode(file_get_contents("php://input"));
$submittedUsername = $submittedCredentials->username;
$submittedEmail = $submittedCredentials->email;
$submittedPassword = $submittedCredentials->password;
$encodedPassword = password_hash($submittedCredentials->password, PASSWORD_ARGON2ID, ['memory_cost' => 2048, 'time_cost' => 4, 'threads' => 1]);

$query_checkIfAccountExists = "SELECT email FROM cg_users WHERE email =:email";
$sql = $dbConnection->prepare($query_checkIfAccountExists);
$sql->bindParam(':email', $submittedEmail);
$sql->execute();
$row = $sql->fetch(PDO::FETCH_ASSOC);

if (!$row) {
    $query_insert = "INSERT INTO cg_users (username, email, password) VALUES (
        :username,
        :email,
        :password
    );";
    $sql = $dbConnection->prepare($query_insert);
    $sql->bindParam(':username', $submittedUsername);
    $sql->bindParam(':email', $submittedEmail);
    $sql->bindParam(':password', $encodedPassword);
    
    if ($sql->execute()) {
        // Fetch the newly inserted user from the database
        $query_select = "SELECT id, username, email, password FROM cg_users WHERE email =:email";
        $selectSql = $dbConnection->prepare($query_select);
        $selectSql->bindParam(':email', $submittedEmail);
        $selectSql->execute();
        
        // Set up the JWT token
        $row = $selectSql->fetch(PDO::FETCH_ASSOC);
        $id = $row["id"];
        $userUsername = $row["username"];
        $userEmail = $row["email"];
        $fetchedPassword = $row["password"];

        $jwt = createJwtToken();
        
        // Output
        echo json_encode([
            "state" => "success",
            "token" => $jwt,
            "type" => "login",
            "username" => $userUsername,
            "additionalInfo" => ""
        ]);
    } else {
        echo json_encode(["state" => "failure", "additionalInfo" => "db_error"]);
    }
} else {
    echo json_encode(["state" => "failure", "additionalInfo" => "acc_exists"]);
}
?>