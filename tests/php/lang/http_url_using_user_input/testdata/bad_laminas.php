<?php

use Laminas\Http\Client;

$user_input = "http://{$_GET['host']}";

# bearer:expected php_lang_http_url_using_user_input
$client = new Client($user_input, [
  'maxredirects' => 0,
  'timeout'      => 30,
]);

$request = new Laminas\Http\Request();
# bearer:expected php_lang_http_url_using_user_input
$request->setUri($user_input);
