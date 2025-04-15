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

class Foo {
  public function bad($name) {
    $query  = "SELECT id, name FROM products WHERE name = $name;";
    # bearer:expected php_lang_sql_injection
    $result = mssql_query($conn, $query);
  }
}


$servername = "localhost";
$username = "mish";
$password = "secret";
$dbname = "users";

$conn = new mysqli($servername, $username, $password, $dbname);
if (isset($_GET['id'])) {
    $userInput = $_GET['id'];
    $query = "SELECT * FROM users WHERE id = '$userInput'";
    # bearer:expected php_lang_sql_injection
    $result = $conn->query($query);
}

?>