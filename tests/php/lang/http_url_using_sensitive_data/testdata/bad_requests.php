<?php

use WpOrg\Requests\Requests;

Requests::get($url, $headers, $user->email);
Requests::head($url, $headers, $user->email);
Requests::delete($url, $headers, $user->email);
Requests::request($url, $headers, $user->email);
Requests::request($url, $headers, $user->email, Requests::GET);

WpOrg\Requests\Requests::request_multiple([
  "one" => ["headers" => $headers, "url" => $url, "data" => $user->email],
  "one" => ["headers" => $headers, "url" => $url, "type" => Requests::GET, "data" => $user->email],
  "two" => ["headers" => $headers, "url" => $url, "type" => Requests::HEAD, "data" => $ok]
], []);

$session = new WpOrg\Requests\Session($user_input, $headers, $user->email);

$session->request($user_input, $headers, $user->email);
$session->request($user_input, $headers, $user->email, Requests::HEAD);

$session->request_multiple([
  ["headers" => $headers, "url" => $url, "data" => $user->email],
  ["headers" => $headers, "url" => $url, "type" => Requests::GET, "data" => $user->email],
  ["headers" => $headers, "url" => $url, "type" => Requests::HEAD, "data" => $ok]
], []);
