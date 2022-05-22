<?php
define('USERNAME', 'root');
define('PASSWORD', '');
define('DBTYPE', 'mysql');
define('HOST', 'localhost');
define('DATABASE', 'cognitalia');

function connect() {
    $dsn = DBTYPE.":host=".HOST.";dbname=".DATABASE;

    $connection = new PDO($dsn, USERNAME, PASSWORD);
    // $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $connection->setAttribute(PDO::MYSQL_ATTR_INIT_COMMAND, "SET NAMES 'UTF-8");

    return $connection;
}
?>