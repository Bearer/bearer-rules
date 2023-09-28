<?php

use Laminas\Http\Client;

$insecure_url = "http://oops.example.com";

$client = new Client($insecure_url, [
  'maxredirects' => 0,
  'timeout'      => 30,
]);

$request = new Laminas\Http\Request();
$request->setUri($insecure_url);
