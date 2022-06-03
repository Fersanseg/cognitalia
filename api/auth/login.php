<?php
require '../../vendor/autoload.php';
require_once '../connection.php';
require '../headers.php';
include '../tokenHandler.php';

$dbConnection = connect();

$submittedCredentials = json_decode(file_get_contents("php://input"));
$submittedPassword = $submittedCredentials->password;
$submittedEmail = $submittedCredentials->user;

$query = "SELECT id, username, email, password FROM cg_users WHERE email =:email";
$sql = $dbConnection->prepare($query);
$sql->bindParam(':email', $submittedEmail);
$sql->execute();

$row = $sql->fetch(PDO::FETCH_ASSOC);
if ($row) {
    $id = $row["id"];
    $userUsername = $row["username"];
    $userEmail = $row["email"];
    $fetchedPassword = $row["password"];

    if (password_verify($submittedPassword, $fetchedPassword)) {
        // Session token generation
        $jwt = createJwtToken();
        
        // output
        echo json_encode([
            "state" => "success",
            "token" => $jwt,
            "type" => "login",
            "username" => $userUsername,
            "additionalInfo" => ""
        ]);
    } else {
        echo json_encode(["state" => "failure", "additionalInfo" => "pw_incorrect"]);
    }
} else {
    echo json_encode(["state" => "failure", "additionalInfo" => "user_notFound"]);
}
?>