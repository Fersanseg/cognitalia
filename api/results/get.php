<?php
require '../../vendor/autoload.php';
require_once '../connection.php';
require '../headers.php';
include '../checkSessionToken.php';

$dbConnection = connect();

if (!isset($_GET) || empty($_GET)) { // Gets all the results
    $query = "SELECT id, test, score FROM cg_results";
    $sql = $dbConnection->prepare($query);

    if ($sql->execute()) {
        $data = $sql->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($data);
    }
} else { // Gets the specified result via its ID
    $resultID = $_GET["id"];
    $query = "SELECT id, test, score FROM cg_results WHERE id = :id";
    $sql = $dbConnection->prepare($query);
    $sql->bindParam(':id', $resultID);

    if ($sql->execute()) {
        $data = $sql->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($data);
    }
}
?>