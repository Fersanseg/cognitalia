<?php
require '../../vendor/autoload.php';
require_once '../connection.php';
require '../headers.php';
include '../tokenHandler.php';

use Firebase\JWT\JWT; // https://github.com/firebase/php-jwt
use Firebase\JWT\Key;

$dbConnection = connect();

$input = json_decode(file_get_contents("php://input"));
$action = $input->action;
$token = $input->token;
$key = "refreshSession"; // Key for the JWT token

if ($action === "generate") {
    $jwt = createRefreshToken();

    echo json_encode(([
        "state" => "success", 
        "token" => $jwt, 
        "type" => "refresh", 
        "expires" => $expiresAt
    ]));
} else if ($action === "refresh") {
    echo json_encode("QERQWER");
} else {
    echo json_encode("Conexion viene mal");
}
?>