<?php
require '../../vendor/autoload.php';
require_once '../connection.php';
require '../headers.php';
include '../tokenHandler.php';

$dbConnection = connect();

$input = json_decode(file_get_contents("php://input"));
$action = $input->action;
$username = isset($input->username) ? $input->username : "";

if ($action === "generate") {
    $jwt = createRefreshToken();

    echo json_encode(([
        "state" => "success", 
        "token" => $jwt, 
        "type" => "refresh"
    ]));
} else if ($action === "refresh") {
    $jwt = createJwtToken();

    echo json_encode([
        "state" => "success", 
        "token" => $jwt, 
        "type" => "login",
        "username" => $username,
        "additionalInfo" => ""
    ]);
}
?>