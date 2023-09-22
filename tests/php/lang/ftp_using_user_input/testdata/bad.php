<?php

$oops = "/files/" . $_GET["oops"];

ftp_connect($ok, $oops);

$connection = ftp_ssl_connect($oops, $ok);
ftp_delete($connection, $oops);
