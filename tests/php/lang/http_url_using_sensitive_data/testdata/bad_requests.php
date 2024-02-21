<?php

use WpOrg\Requests\Requests;

# bearer:expected php_lang_http_url_using_sensitive_data
Requests::request($url, $headers, $user->email);
# bearer:expected php_lang_http_url_using_sensitive_data
Requests::request($url, data: $user->email);
# bearer:expected php_lang_http_url_using_sensitive_data
Requests::request($url, $headers, $user->email, Requests::GET);
# bearer:expected php_lang_http_url_using_sensitive_data
Requests::request($url, data: $user->email, type: Requests::GET);

# bearer:expected php_lang_http_url_using_sensitive_data
WpOrg\Requests\Requests::request_multiple([
  "one" => ["headers" => $headers, "url" => $url, "data" => $user->email],
  "one" => ["headers" => $headers, "url" => $url, "type" => Requests::GET, "data" => $user->email],
  "two" => ["headers" => $headers, "url" => $url, "type" => Requests::HEAD, "data" => $ok]
], []);

# bearer:expected php_lang_http_url_using_sensitive_data
$session = new WpOrg\Requests\Session($user_input, $headers, $user->email);

# bearer:expected php_lang_http_url_using_sensitive_data
$session->request($user_input, $headers, $user->email);
# bearer:expected php_lang_http_url_using_sensitive_data
$session->request($user_input, data: $user->email);
# bearer:expected php_lang_http_url_using_sensitive_data
$session->request($user_input, $headers, $user->email, Requests::HEAD);
# bearer:expected php_lang_http_url_using_sensitive_data
$session->request($user_input, data: $user->email, type: Requests::HEAD);

# bearer:expected php_lang_http_url_using_sensitive_data
$session->request_multiple([
  ["headers" => $headers, "url" => $url, "data" => $user->email],
  ["headers" => $headers, "url" => $url, "type" => Requests::GET, "data" => $user->email],
  ["headers" => $headers, "url" => $url, "type" => Requests::HEAD, "data" => $ok]
], []);
