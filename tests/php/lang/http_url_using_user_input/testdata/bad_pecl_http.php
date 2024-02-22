<?php

use http\Client\Request;

$user_input = "http://{$_GET['host']}";

# bearer:expected php_lang_http_url_using_user_input
$req = new Request("GET", $user_input);
