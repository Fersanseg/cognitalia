<?php
include_once '../tokenHandler.php';
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$headers = getallheaders();

if (isset(getallheaders()['Authorization'])) {
    $token = explode(" ", getallheaders()['Authorization'])[1]; // Gets token from header

    try {
        JWT::$leeway = 10;
        $decoded = JWT::decode($token, new Key(SECRET_KEY, 'HS256'));
        return http_response_code(200);
    } catch (Exception $e) {
        return http_response_code(401);
    }
}
?>