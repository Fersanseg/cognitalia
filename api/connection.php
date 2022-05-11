<?php
define('USERNAME', 'root');
define('PASSWORD', '');
define('DBTYPE', 'mysql');
define('HOST', 'localhost');
define('DATABASE', 'cognitalia');

function connect() {
    $dsn = DBTYPE.":host=".HOST.";dbname=".DATABASE;

    $connection = new PDO($dsn, USERNAME, PASSWORD);
    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    return $connection;
}
?>