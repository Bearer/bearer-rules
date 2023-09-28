<?php

$user_input = "http://{$_GET['host']}";

use WpOrg\Requests\Requests;

Requests::get($user_input, $headers);
Requests::head($user_input, $headers);
Requests::delete($user_input, $headers);
Requests::trace($user_input, $headers);
Requests::post($user_input, $headers);
Requests::put($user_input, $headers);
Requests::options($user_input, $headers);
Requests::patch($user_input, $headers);
Requests::request($user_input, $headers);

WpOrg\Requests\Requests::request_multiple([
  "one" => ["headers" => $headers, "url" => $user_input],
  "two" => ["headers" => $headers, "url" => "https://ok.example.com"]
], []);

$session = new WpOrg\Requests\Session($user_input, $headers);

$session->get($user_input, $headers);
$session->head($user_input, $headers);
$session->delete($user_input, $headers);
$session->post($user_input, $headers);
$session->put($user_input, $headers);
$session->patch($user_input, $headers);
$session->request($user_input, $headers);

$session->request_multiple([
  ["headers" => $headers, "url" => $user_input],
  ["headers" => $headers, "url" => "https://ok.example.com"]
], []);
