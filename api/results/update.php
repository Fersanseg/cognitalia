<?php
require '../../vendor/autoload.php';
require_once '../connection.php';
require '../headers.php';

$dbConnection = connect();

$resultIncomingData = json_decode(file_get_contents("php://input"));

$testId = $resultIncomingData->id;
$testName = $resultIncomingData->test;
$testScore = $resultIncomingData->score;

$query = "UPDATE cg_results SET score =:score WHERE id =:id";
$sql = $dbConnection->prepare($query);
$sql->bindParam(':score', $testScore);
$sql->bindParam(':id', $testId);

if ($sql->execute()) {
    return http_response_code(204); // No content (request was successful)
} else {
    return http_response_code(422); // Unprocessable entity (there were errors in the query and it could not be executed)
}
?>