<?php
require '../../vendor/autoload.php';
require_once '../connection.php';
require '../headers.php';

use \Firebase\JWT\JWT; // https://github.com/firebase/php-jwt

$dbConnection = connect();

$input = json_decode(file_get_contents("php://input"));
$action = $input->action;
$token = $input->refreshToken;

if ($action === "generate") {
    $factory = new RandomLib\Factory();
    $generator = $factory->getMediumStrengthGenerator();
    $randomString = $generator->generateString(32);

    $issuer = "localhost"; // The entity that issued the token (the website)
    $audience = "loggedInUser"; // The recipient that will consume the token (the user)
    $issuedAt = time(); // The time (seconds since Unix epoch) when the token was issued
    $notBefore = $issuedAt; // The time after which the token can be accepted
    $expiresAt = $issuedAt + 604800; // The time at which the token will expire

    $key = "refreshSession"; // Key for the JWT token
    $payload = [ // The body of the JWT token
        'iss' => $issuer,
        'aud' => $audience,
        'iat' => $issuedAt,
        'nbf' => $notBefore,
        'exp' => $expiresAt,
        'data' => [
            'token' => $randomString
        ]
    ];

    $jwt = JWT::encode($payload, $key, 'HS256');

    echo json_encode((["state" => "success", "token" => $jwt, "type" => "refresh", "expires" => $expiresAt]));
}
?>