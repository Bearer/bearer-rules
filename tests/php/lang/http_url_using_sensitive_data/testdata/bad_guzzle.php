<?php

use GuzzleHttp\Client;

$client = new Client([
  'timeout'  => 2.0,
]);

$url = "http://example.com";

# bearer:expected php_lang_http_url_using_sensitive_data
$response = $client->request("GET", $url, ['query' => ['user', $user->email]]);
# bearer:expected php_lang_http_url_using_sensitive_data
$client->send($request, ['query' => ['user', $user->email]]);
# bearer:expected php_lang_http_url_using_sensitive_data
$client->sendAsync($request, ['query' => ['user', $user->email]]);

# bearer:expected php_lang_http_url_using_sensitive_data
$client->get($url, ['query' => ['user', $user->email]]);
# bearer:expected php_lang_http_url_using_sensitive_data
$client->delete($url, ['query' => ['user', $user->email]]);
# bearer:expected php_lang_http_url_using_sensitive_data
$client->head($url, ['query' => ['user', $user->email]]);
# bearer:expected php_lang_http_url_using_sensitive_data
$client->options($url, ['query' => ['user', $user->email]]);
# bearer:expected php_lang_http_url_using_sensitive_data
$client->patch($url, ['query' => ['user', $user->email]]);
# bearer:expected php_lang_http_url_using_sensitive_data
$client->post($url, ['query' => ['user', $user->email]]);
# bearer:expected php_lang_http_url_using_sensitive_data
$client->put($url, ['query' => ['user', $user->email]]);
# bearer:expected php_lang_http_url_using_sensitive_data
$client->getAsync($url, ['query' => ['user', $user->email]]);
# bearer:expected php_lang_http_url_using_sensitive_data
$client->deleteAsync($url, ['query' => ['user', $user->email]]);
# bearer:expected php_lang_http_url_using_sensitive_data
$client->headAsync($url, ['query' => ['user', $user->email]]);
# bearer:expected php_lang_http_url_using_sensitive_data
$client->optionsAsync($url, ['query' => ['user', $user->email]]);
# bearer:expected php_lang_http_url_using_sensitive_data
$client->patchAsync($url, ['query' => ['user', $user->email]]);
# bearer:expected php_lang_http_url_using_sensitive_data
$client->postAsync($url, ['query' => ['user', $user->email]]);
# bearer:expected php_lang_http_url_using_sensitive_data
$client->putAsync($url, ['query' => ['user', $user->email]]);
