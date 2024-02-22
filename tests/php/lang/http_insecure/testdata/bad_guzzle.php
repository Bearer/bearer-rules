<?php

use GuzzleHttp\Client;

$insecure_url = "http://oops.example.com";

# bearer:expected php_lang_http_insecure
$client = new Client([
  'base_uri' => $insecure_url,
  'timeout'  => 2.0,
]);

# bearer:expected php_lang_http_insecure
$response = $client->request("GET", $insecure_url, [
  'auth' => ['user', 'pass']
]);

# bearer:expected php_lang_http_insecure
$client->get($insecure_url);
# bearer:expected php_lang_http_insecure
$client->delete($insecure_url);
# bearer:expected php_lang_http_insecure
$client->head($insecure_url);
# bearer:expected php_lang_http_insecure
$client->options($insecure_url);
# bearer:expected php_lang_http_insecure
$client->patch($insecure_url);
# bearer:expected php_lang_http_insecure
$client->post($insecure_url);
# bearer:expected php_lang_http_insecure
$client->put($insecure_url);
# bearer:expected php_lang_http_insecure
$client->getAsync($insecure_url);
# bearer:expected php_lang_http_insecure
$client->deleteAsync($insecure_url);
# bearer:expected php_lang_http_insecure
$client->headAsync($insecure_url);
# bearer:expected php_lang_http_insecure
$client->optionsAsync($insecure_url);
# bearer:expected php_lang_http_insecure
$client->patchAsync($insecure_url);
# bearer:expected php_lang_http_insecure
$client->postAsync($insecure_url);
# bearer:expected php_lang_http_insecure
$client->putAsync($insecure_url);

# bearer:expected php_lang_http_insecure
$request = new Request('HEAD', $insecure_url, $headers);
