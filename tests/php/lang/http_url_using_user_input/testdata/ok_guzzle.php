<?php

use GuzzleHttp\Client;

$secure_url = "https://ok.example.com";

$client = new Client([
  'base_uri' => $secure_url,
  'timeout'  => 2.0,
]);

$response = $client->request("GET", $secure_url, [
  'auth' => ['user', 'pass']
]);

$client->get($secure_url);

$request = new Request('HEAD', $secure_url, $headers);
