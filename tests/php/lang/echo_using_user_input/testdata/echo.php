<?php

echo count ( $_POST ['ok'] );
echo $_GET['oops'];
echo $_GET['ok'] ? "10" : "20";
echo $_GET['ok'] ? $_GET["oops"] : "20";
echo "A total number of ".count($_POST['ok'])." users where removed.<hr/><a
  href='?'>Back</a>";

echo "<h1>" . filter_var($_GET["ok"], FILTER_SANITIZE_STRING) . "</h1>";

?>