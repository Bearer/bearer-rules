<?php

use Laminas\Http\Client;

$secure_url = "https://ok.example.com";

$client = new Client($secure_url, [
  'maxredirects' => 0,
  'timeout'      => 30,
]);

$request = new Laminas\Http\Request();
$request->setUri($secure_url);
