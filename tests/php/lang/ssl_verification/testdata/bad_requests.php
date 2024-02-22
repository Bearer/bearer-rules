<?php

use WpOrg\Requests\Requests;

# bearer:expected php_lang_ssl_verification
Requests::get($url, $headers, ["verify" => false]);
# bearer:expected php_lang_ssl_verification
Requests::get($url, options: ["verify" => false]);
# bearer:expected php_lang_ssl_verification
Requests::post($url, $headers, $data, ["verifyname" => false]);
# bearer:expected php_lang_ssl_verification
Requests::post($url, options: ["verifyname" => false]);

# bearer:expected php_lang_ssl_verification
Requests::request($url, $headers, $data, Requests::GET, ["verify" => false]);
# bearer:expected php_lang_ssl_verification
Requests::request($url, options: ["verify" => false]);
# bearer:expected php_lang_ssl_verification
Requests::request($url, $headers, $data, Requests::GET, ["verifyname" => false]);
# bearer:expected php_lang_ssl_verification
Requests::request($url, options: ["verifyname" => false]);

# bearer:expected php_lang_ssl_verification
WpOrg\Requests\Requests::request_multiple([
  "one" => ["url" => $url, "verify" => false],
  "two" => ["url" => $url, "verifyname" => false],
  "three" => ["url" => $url]
], []);

# bearer:expected php_lang_ssl_verification
$session = new WpOrg\Requests\Session($user_input, $headers, $data, ["verify" => false]);
# bearer:expected php_lang_ssl_verification
$session = new WpOrg\Requests\Session($user_input, options: ["verify" => false]);

# bearer:expected php_lang_ssl_verification
$session->request($user_input, $headers, $data, Requests::HEAD, ["verifyname" => false]);
# bearer:expected php_lang_ssl_verification
$session->request($user_input, options: ["verifyname" => false]);

# bearer:expected php_lang_ssl_verification
$session->request_multiple([
  ["url" => $url, "verify" => false],
  ["url" => $url, "verifyname" => false],
  ["url" => $url]
], []);
