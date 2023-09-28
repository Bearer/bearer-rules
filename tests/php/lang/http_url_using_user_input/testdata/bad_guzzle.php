<?php

use GuzzleHttp\Client;

$user_input = "http://{$_GET['host']}";

$client = new Client([
  'base_uri' => $user_input,
  'timeout'  => 2.0,
]);

$response = $client->request("GET", $user_input, [
  'auth' => ['user', 'pass']
]);

$client->get($user_input);
$client->delete($user_input);
$client->head($user_input);
$client->options($user_input);
$client->patch($user_input);
$client->post($user_input);
$client->put($user_input);
$client->getAsync($user_input);
$client->deleteAsync($user_input);
$client->headAsync($user_input);
$client->optionsAsync($user_input);
$client->patchAsync($user_input);
$client->postAsync($user_input);
$client->putAsync($user_input);

$request = new Request('HEAD', $user_input, $headers);
