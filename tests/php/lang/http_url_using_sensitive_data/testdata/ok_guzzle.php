<?php

use GuzzleHttp\Client;

$client = new Client([
  'timeout'  => 2.0,
]);

$url = "http://example.com";
$options = ['query' => ['user', $ok]];

$response = $client->request("GET", $url, $options);
$client->send($request, $options);
$client->get($url, $options);
