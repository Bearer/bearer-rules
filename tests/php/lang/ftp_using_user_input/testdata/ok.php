<?php

ftp_connect($ok, $ok);

$connection = ftp_ssl_connect($ok, $ok);
ftp_delete($connection, $ok);
