<?php

use WpOrg\Requests\Requests;

Requests::get($url, $headers, $ok);
Requests::head($url, $headers, $ok);
Requests::delete($url, $headers, $ok);
Requests::request($url, $headers, $ok);
Requests::request($url, $headers, $user->email, Requests::POST);
Requests::request($url, $headers, $ok, Requests::GET);
Requests::request($url, data: $ok);
Requests::request($url, data: $ok, type: Requests::GET);
Requests::request($url, data: $user->email, type: Requests::POST);

WpOrg\Requests\Requests::request_multiple([
  "one" => ["headers" => $headers, "url" => $url, "data" => $ok],
  "one" => ["headers" => $headers, "url" => $url, "type" => Requests::GET, "data" => $ok],
  "two" => ["headers" => $headers, "url" => $url, "type" => Requests::POST, "data" => $user->email]
], []);

$session = new WpOrg\Requests\Session($user_input, $headers, $ok);

$session->request($user_input, $headers, $ok);
$session->request($user_input, $headers, $ok, Requests::HEAD);
$session->request($user_input, $headers, $user->email, Requests::PUT);
$session->request($user_input, data: $ok);
$session->request($url, data: $ok, type: Requests::GET);
$session->request($url, data: $user->email, type: Requests::POST);

$session->request_multiple([
  ["headers" => $headers, "url" => $url, "data" => $ok],
  ["headers" => $headers, "url" => $url, "type" => Requests::GET, "data" => $ok],
  ["headers" => $headers, "url" => $url, "type" => Requests::POST, "data" => $user->email]
], []);
