<?php

use GuzzleHttp\Client;

$insecure_url = "http://oops.example.com";

$client = new Client([
  'base_uri' => $insecure_url,
  'timeout'  => 2.0,
]);

$response = $client->request("GET", $insecure_url, [
  'auth' => ['user', 'pass']
]);

$client->get($insecure_url);
$client->delete($insecure_url);
$client->head($insecure_url);
$client->options($insecure_url);
$client->patch($insecure_url);
$client->post($insecure_url);
$client->put($insecure_url);
$client->getAsync($insecure_url);
$client->deleteAsync($insecure_url);
$client->headAsync($insecure_url);
$client->optionsAsync($insecure_url);
$client->patchAsync($insecure_url);
$client->postAsync($insecure_url);
$client->putAsync($insecure_url);

$request = new Request('HEAD', $insecure_url, $headers);
