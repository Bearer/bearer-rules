<?php

use http\Client\Request;

$insecure_url = "http://oops.example.com";

# bearer:expected php_lang_http_insecure
$req = new Request("GET", $insecure_url);
