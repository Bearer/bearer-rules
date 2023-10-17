<?php

use GuzzleHttp\Client;

$client = new Client([
  'timeout'  => 2.0,
  'verify' => false
]);

$url = "http://example.com";
$options = ["verify" => false, "other" => 42];

$response = $client->request("GET", $url, $options);
$client->send($request, $options);
$client->sendAsync($request, $options);

$client->get($url, $options);
$client->delete($url, $options);
$client->head($url, $options);
$client->options($url, $options);
$client->patch($url, $options);
$client->post($url, $options);
$client->put($url, $options);
$client->getAsync($url, $options);
$client->deleteAsync($url, $options);
$client->headAsync($url, $options);
$client->optionsAsync($url, $options);
$client->patchAsync($url, $options);
$client->postAsync($url, $options);
$client->putAsync($url, $options);
