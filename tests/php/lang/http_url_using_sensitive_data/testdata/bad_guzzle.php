<?php

use GuzzleHttp\Client;

$client = new Client([
  'timeout'  => 2.0,
]);

$url = "http://example.com";

$response = $client->request("GET", $url, ['query' => ['user', $user->email]]);
$client->send($request, ['query' => ['user', $user->email]]);
$client->sendAsync($request, ['query' => ['user', $user->email]]);

$client->get($url, ['query' => ['user', $user->email]]);
$client->delete($url, ['query' => ['user', $user->email]]);
$client->head($url, ['query' => ['user', $user->email]]);
$client->options($url, ['query' => ['user', $user->email]]);
$client->patch($url, ['query' => ['user', $user->email]]);
$client->post($url, ['query' => ['user', $user->email]]);
$client->put($url, ['query' => ['user', $user->email]]);
$client->getAsync($url, ['query' => ['user', $user->email]]);
$client->deleteAsync($url, ['query' => ['user', $user->email]]);
$client->headAsync($url, ['query' => ['user', $user->email]]);
$client->optionsAsync($url, ['query' => ['user', $user->email]]);
$client->patchAsync($url, ['query' => ['user', $user->email]]);
$client->postAsync($url, ['query' => ['user', $user->email]]);
$client->putAsync($url, ['query' => ['user', $user->email]]);
