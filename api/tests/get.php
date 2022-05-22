<?php
require '../../vendor/autoload.php';
require_once '../connection.php';
require '../headers.php';

$dbConnection = connect();

$query = "SELECT title, subtitle, description, icon1, icon2, icon3 FROM cg_tests";
$sql = $dbConnection->prepare($query);

if ($sql->execute()) {
    $data = $sql->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data);
}
?>