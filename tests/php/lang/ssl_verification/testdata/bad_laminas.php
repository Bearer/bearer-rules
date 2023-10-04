<?php

use Laminas\Http\Client;

$client = new Client("http://example.com", [
  'maxredirects' => 0,
  'timeout'      => 30,
  "sslverifypeer" => false,
]);

$client = new Client("http://example.com", [
  'maxredirects' => 0,
  'timeout'      => 30,
  "sslverifypeername" => false,
]);

$client->setOptions([
  "sslverifypeer" => false,
]);

$client->setOptions([
  "sslverifypeername" => false,
]);
