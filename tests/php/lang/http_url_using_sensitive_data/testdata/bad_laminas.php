<?php

use Laminas\Http\Client;

$client = new Client("http://example.com", [
  'maxredirects' => 0,
  'timeout'      => 30,
]);

# bearer:expected php_lang_http_url_using_sensitive_data
$client->setParameterGet([
  "data" => $user->email
]);

$request = new Laminas\Http\Request();
$query = $request->getQuery();
# bearer:expected php_lang_http_url_using_sensitive_data
$query->set("x", $user->email);
# bearer:expected php_lang_http_url_using_sensitive_data
$query->offsetSet("y", $user->email);
# bearer:expected php_lang_http_url_using_sensitive_data
$query->z = $user->email;
