<?php

$oops = $_GET['oops'];
$query  = "SELECT id, name FROM products ORDER BY name LIMIT 20 $oops;";
# bearer:expected php_lang_sql_injection
$result = pg_query($conn, $query);

$oops = $_GET['oops'];
$query  = "SELECT id, name FROM products ORDER BY name LIMIT 20 $oops;";
# bearer:expected php_lang_sql_injection
$result = odbc_exec($conn, $query);

$oops = $_GET['oops'];
$query  = "SELECT id, name FROM products ORDER BY name LIMIT 20 $oops;";
# bearer:expected php_lang_sql_injection
$result = mssql_query($conn, $query);

$oops = $_GET['oops'];
$query  = "SELECT id, name FROM products ORDER BY name LIMIT 20 $oops;";
# bearer:expected php_lang_sql_injection
$result = mysqli_query($conn, $query);

?>