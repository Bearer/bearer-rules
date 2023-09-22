<?php

echo count ( $_POST ['ok'] );
echo $_GET['oops'];
echo $_GET['ok'] ? "10" : "20";
echo $_GET['ok'] ? $_GET["oops"] : "20";
echo "A total number of ".count($_POST['ok'])." users where removed.<hr/><a
  href='?'>Back</a>";

$oops = $_POST['oops'];
$oops2 = $_POST['oops2'];
echo($oops), ($oops2);
echo($bar . ""), ("". $oops2);
echo $oops, $oops2;
echo "my string $oops is $oops2";

$oopsies = [$_GET['oops'], $_GET['oops2']];
echo implode(" and ", $oopsies);

// Safe
echo "<h1>" . filter_var($_GET["ok"], FILTER_SANITIZE_STRING) . "</h1>";

// FIXME: Add support for $this
$this->Oops = $_POST["oops"];
echo $this->Oops;

?>