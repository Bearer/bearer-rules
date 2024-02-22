<?php

$oops = "/files/" . $_GET["oops"];

# bearer:expected php_lang_ftp_using_user_input
ftp_connect($ok, $oops);

# bearer:expected php_lang_ftp_using_user_input
$connection = ftp_ssl_connect($oops, $ok);
# bearer:expected php_lang_ftp_using_user_input
ftp_delete($connection, $oops);
