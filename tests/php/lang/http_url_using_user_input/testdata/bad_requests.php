<?php

$user_input = "http://{$_GET['host']}";

use WpOrg\Requests\Requests;

# bearer:expected php_lang_http_url_using_user_input
Requests::get($user_input, $headers);
# bearer:expected php_lang_http_url_using_user_input
Requests::head($user_input, $headers);
# bearer:expected php_lang_http_url_using_user_input
Requests::delete($user_input, $headers);
# bearer:expected php_lang_http_url_using_user_input
Requests::trace($user_input, $headers);
# bearer:expected php_lang_http_url_using_user_input
Requests::post($user_input, $headers);
# bearer:expected php_lang_http_url_using_user_input
Requests::put($user_input, $headers);
# bearer:expected php_lang_http_url_using_user_input
Requests::options($user_input, $headers);
# bearer:expected php_lang_http_url_using_user_input
Requests::patch($user_input, $headers);
# bearer:expected php_lang_http_url_using_user_input
Requests::request($user_input, $headers);

# bearer:expected php_lang_http_url_using_user_input
WpOrg\Requests\Requests::request_multiple([
  "one" => ["headers" => $headers, "url" => $user_input],
  "two" => ["headers" => $headers, "url" => "https://ok.example.com"]
], []);

# bearer:expected php_lang_http_url_using_user_input
$session = new WpOrg\Requests\Session($user_input, $headers);

# bearer:expected php_lang_http_url_using_user_input
$session->get($user_input, $headers);
# bearer:expected php_lang_http_url_using_user_input
$session->head($user_input, $headers);
# bearer:expected php_lang_http_url_using_user_input
$session->delete($user_input, $headers);
# bearer:expected php_lang_http_url_using_user_input
$session->post($user_input, $headers);
# bearer:expected php_lang_http_url_using_user_input
$session->put($user_input, $headers);
# bearer:expected php_lang_http_url_using_user_input
$session->patch($user_input, $headers);
# bearer:expected php_lang_http_url_using_user_input
$session->request($user_input, $headers);

# bearer:expected php_lang_http_url_using_user_input
$session->request_multiple([
  ["headers" => $headers, "url" => $user_input],
  ["headers" => $headers, "url" => "https://ok.example.com"]
], []);
