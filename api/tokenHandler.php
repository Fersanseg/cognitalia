<?php
require '../../vendor/autoload.php';

use Firebase\JWT\JWT; // https://github.com/firebase/php-jwt


define('SECRET_KEY', 'xFHCS5KigKejvbfm4nfOOTTqwsT8G7T4c7UFwJag');

function createJwtToken() {
    return createToken(600);
}

function createRefreshToken() {
    return createToken(604800);
}

function createToken($duration) {
    $factory = new RandomLib\Factory();
    $generator = $factory->getMediumStrengthGenerator();
    $randomString = $generator->generateString(32);

    $issuer = "localhost"; // The entity that issued the token (the website)
    $audience = "loggedInUser"; // The recipient that will consume the token (the user)
    $issuedAt = time(); // The time (seconds since Unix epoch) when the token was issued
    $notBefore = $issuedAt-10; // The time after which the token can be accepted
    $expiresAt = $issuedAt + $duration; // The time at which the token will expire

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

    return JWT::encode($payload, SECRET_KEY, 'HS256');
}
?>