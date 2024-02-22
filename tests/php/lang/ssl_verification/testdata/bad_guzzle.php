<?php

use GuzzleHttp\Client;

# bearer:expected php_lang_ssl_verification
$client = new Client([
  'timeout'  => 2.0,
  'verify' => false
]);

$url = "http://example.com";
$options = ["verify" => false, "other" => 42];

# bearer:expected php_lang_ssl_verification
$response = $client->request("GET", $url, $options);
# bearer:expected php_lang_ssl_verification
$client->send($request, $options);
# bearer:expected php_lang_ssl_verification
$client->sendAsync($request, $options);

# bearer:expected php_lang_ssl_verification
$client->get($url, $options);
# bearer:expected php_lang_ssl_verification
$client->delete($url, $options);
# bearer:expected php_lang_ssl_verification
$client->head($url, $options);
# bearer:expected php_lang_ssl_verification
$client->options($url, $options);
# bearer:expected php_lang_ssl_verification
$client->patch($url, $options);
# bearer:expected php_lang_ssl_verification
$client->post($url, $options);
# bearer:expected php_lang_ssl_verification
$client->put($url, $options);
# bearer:expected php_lang_ssl_verification
$client->getAsync($url, $options);
# bearer:expected php_lang_ssl_verification
$client->deleteAsync($url, $options);
# bearer:expected php_lang_ssl_verification
$client->headAsync($url, $options);
# bearer:expected php_lang_ssl_verification
$client->optionsAsync($url, $options);
# bearer:expected php_lang_ssl_verification
$client->patchAsync($url, $options);
# bearer:expected php_lang_ssl_verification
$client->postAsync($url, $options);
# bearer:expected php_lang_ssl_verification
$client->putAsync($url, $options);
