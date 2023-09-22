<?php

$oops = $_POST['oops'];
$oops2 = $_POST['oops2'];
print "my string $oops is $oops2";
print "my count is.". count($oops2);

// Safe
print "<h1>" . filter_var($_GET["ok"], FILTER_SANITIZE_STRING) . "</h1>";

?>