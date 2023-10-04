<?php

use Laminas\Http\Client;

$client = new Client("http://example.com", [
  'maxredirects' => 0,
  'timeout'      => 30,
  "sslverifypeer" => true,
]);

$client = new Client("http://example.com", [
  'maxredirects' => 0,
  'timeout'      => 30,
  "sslverifypeername" => true,
]);

$client->setOptions([
  "sslverifypeer" => true,
  "sslverifypeername" => true,
]);
