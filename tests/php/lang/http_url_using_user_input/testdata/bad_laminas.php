<?php

use Laminas\Http\Client;

$user_input = "http://{$_GET['host']}";

$client = new Client($user_input, [
  'maxredirects' => 0,
  'timeout'      => 30,
]);

$request = new Laminas\Http\Request();
$request->setUri($user_input);
