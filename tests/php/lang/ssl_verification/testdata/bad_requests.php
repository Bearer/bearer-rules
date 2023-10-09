<?php

use WpOrg\Requests\Requests;

Requests::get($url, $headers, ["verify" => false]);
Requests::get($url, options: ["verify" => false]);
Requests::post($url, $headers, $data, ["verifyname" => false]);
Requests::post($url, options: ["verifyname" => false]);

Requests::request($url, $headers, $data, Requests::GET, ["verify" => false]);
Requests::request($url, options: ["verify" => false]);
Requests::request($url, $headers, $data, Requests::GET, ["verifyname" => false]);
Requests::request($url, options: ["verifyname" => false]);

WpOrg\Requests\Requests::request_multiple([
  "one" => ["url" => $url, "verify" => false],
  "two" => ["url" => $url, "verifyname" => false],
  "three" => ["url" => $url]
], []);

$session = new WpOrg\Requests\Session($user_input, $headers, $data, ["verify" => false]);
$session = new WpOrg\Requests\Session($user_input, options: ["verify" => false]);

$session->request($user_input, $headers, $data, Requests::HEAD, ["verifyname" => false]);
$session->request($user_input, options: ["verifyname" => false]);

$session->request_multiple([
  ["url" => $url, "verify" => false],
  ["url" => $url, "verifyname" => false],
  ["url" => $url]
], []);