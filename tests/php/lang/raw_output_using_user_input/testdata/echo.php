<?php

echo count ( $_POST ['ok'] );
# bearer:expected php_lang_raw_output_using_user_input
echo $_GET['oops'];
echo $_GET['ok'] ? "10" : "20";
# bearer:expected php_lang_raw_output_using_user_input
echo $_GET['ok'] ? $_GET["oops"] : "20";
echo "A total number of ".count($_POST['ok'])." users where removed.<hr/><a
  href='?'>Back</a>";

$oops = $_POST['oops'];
$oops2 = $_POST['oops2'];
# bearer:expected php_lang_raw_output_using_user_input
echo($oops), ($oops2);
# bearer:expected php_lang_raw_output_using_user_input
echo($bar . ""), ("". $oops2);
# bearer:expected php_lang_raw_output_using_user_input
echo $oops, $oops2;
# bearer:expected php_lang_raw_output_using_user_input
echo "my string $oops is $oops2";

$oopsies = [$_GET['oops'], $_GET['oops2']];
# bearer:expected php_lang_raw_output_using_user_input
echo implode(" and ", $oopsies);

// Safe
echo "<h1>" . filter_var($_GET["ok"], FILTER_SANITIZE_STRING) . "</h1>";
echo strip_tags($_GET["ok"]);
echo $_GET["x"] + $_GET["y"];
echo (int)$_GET["x"];

// FIXME: Add support for $this
$this->Oops = $_POST["oops"];
echo $this->Oops;

?>
