<?php

use Laminas\Http\Client;

$insecure_url = "http://oops.example.com";

# bearer:expected php_lang_http_insecure
$client = new Client($insecure_url, [
  'maxredirects' => 0,
  'timeout'      => 30,
]);

$request = new Laminas\Http\Request();
# bearer:expected php_lang_http_insecure
$request->setUri($insecure_url);
