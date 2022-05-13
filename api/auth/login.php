<?php
require '../../vendor/autoload.php';
require_once '../connection.php';
require '../headers.php';

use \Firebase\JWT\JWT;

$dbConnection = connect();

$submittedCredentials = json_decode(file_get_contents("php://input"));
$submittedEmail = $submittedCredentials->user;
$submittedPassword = $submittedCredentials->password;

$query = "SELECT id, email, password FROM cg_users WHERE email =:email";
$sql = $dbConnection->prepare($query);
$sql->bindParam(':email', $submittedEmail);
$sql->execute();

$row = $sql->fetch(PDO::FETCH_ASSOC);
if ($row) {
    $id = $row["id"];
    $userEmail = $row["email"];
    $fetchedPassword = $row["password"];

    if (password_verify($submittedPassword, $fetchedPassword)) {
        $issuer = "localhost"; // The entity that issued the token (the website)
        $audience = "loggedInUser"; // The recipient that will consume the token (the user)
        $issuedAt = time(); // The time (seconds since Unix epoch) when the token was issued
        $notBefore = $issuedAt; // The time after which the token can be accepted
        $expiresAt = $issuedAt + 86400; // The time at which the token will expire
        
        $key = "verifiedLogin"; // Key for the JWT token
        $payload = [ // The body of the JWT token
            'iss' => $issuer,
            'aud' => $audience,
            'iat' => $issuedAt,
            'nbf' => $notBefore,
            'exp' => $expiresAt,
            'data' => [
                'id' => $id,
                'userEmail' => $userEmail,
            ]
        ];

        $jwt = JWT::encode($payload, $key, 'HS256');
        
        // output
        echo json_encode([
            "state" => "success",
            "token" => $jwt,
            "email" => $userEmail,
            "expires" => $expiresAt
        ]);
    } else {
        echo json_encode(["state" => "failure"]);
    }
} else {
    echo json_encode(["state" => "failure"]);
}
?>