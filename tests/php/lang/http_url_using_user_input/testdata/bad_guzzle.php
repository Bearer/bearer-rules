<?php

use GuzzleHttp\Client;

$user_input = "http://{$_GET['host']}";

# bearer:expected php_lang_http_url_using_user_input
$client = new Client([
  'base_uri' => $user_input,
  'timeout'  => 2.0,
]);

# bearer:expected php_lang_http_url_using_user_input
$response = $client->request("GET", $user_input, [
  'auth' => ['user', 'pass']
]);
# bearer:expected php_lang_http_url_using_user_input
$response = $client->requestAsync("GET", $user_input, []);

# bearer:expected php_lang_http_url_using_user_input
$client->get($user_input);
# bearer:expected php_lang_http_url_using_user_input
$client->delete($user_input);
# bearer:expected php_lang_http_url_using_user_input
$client->head($user_input);
# bearer:expected php_lang_http_url_using_user_input
$client->options($user_input);
# bearer:expected php_lang_http_url_using_user_input
$client->patch($user_input);
# bearer:expected php_lang_http_url_using_user_input
$client->post($user_input);
# bearer:expected php_lang_http_url_using_user_input
$client->put($user_input);
# bearer:expected php_lang_http_url_using_user_input
$client->getAsync($user_input);
# bearer:expected php_lang_http_url_using_user_input
$client->deleteAsync($user_input);
# bearer:expected php_lang_http_url_using_user_input
$client->headAsync($user_input);
# bearer:expected php_lang_http_url_using_user_input
$client->optionsAsync($user_input);
# bearer:expected php_lang_http_url_using_user_input
$client->patchAsync($user_input);
# bearer:expected php_lang_http_url_using_user_input
$client->postAsync($user_input);
# bearer:expected php_lang_http_url_using_user_input
$client->putAsync($user_input);

# bearer:expected php_lang_http_url_using_user_input
$request = new Request('HEAD', $user_input, $headers);
