<?php

$oops = $_GET['oops'];
$query  = "SELECT id, name FROM products ORDER BY name LIMIT 20 $oops;";
$result = pg_query($conn, $query);

$oops = $_GET['oops'];
$query  = "SELECT id, name FROM products ORDER BY name LIMIT 20 $oops;";
$result = odbc_exec($conn, $query);

$oops = $_GET['oops'];
$query  = "SELECT id, name FROM products ORDER BY name LIMIT 20 $oops;";
$result = mssql_query($conn, $query);

$oops = $_GET['oops'];
$query  = "SELECT id, name FROM products ORDER BY name LIMIT 20 $oops;";
$result = mysqli_query($conn, $query);

?>