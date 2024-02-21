<?php

use Laminas\Http\Client;

# bearer:expected php_lang_ssl_verification
$client = new Client("http://example.com", [
  'maxredirects' => 0,
  'timeout'      => 30,
  "sslverifypeer" => false,
]);

# bearer:expected php_lang_ssl_verification
$client = new Client("http://example.com", [
  'maxredirects' => 0,
  'timeout'      => 30,
  "sslverifypeername" => false,
]);

# bearer:expected php_lang_ssl_verification
$client->setOptions([
  "sslverifypeer" => false,
]);

# bearer:expected php_lang_ssl_verification
$client->setOptions([
  "sslverifypeername" => false,
]);
