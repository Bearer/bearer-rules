<?php

use WpOrg\Requests\Requests;

Requests::request($url, $headers, $data, Requests::GET, ["verify" => true]);
Requests::request($url, $headers, $data, Requests::GET, ["verifyname" => true]);
Requests::request($url, options: ["verify" => true]);
Requests::request($url, options: ["verifyname" => true]);

WpOrg\Requests\Requests::request_multiple([
  "one" => ["url" => $url, "verify" => true, "verifyname" => true],
  "three" => ["url" => $url]
], []);

$session = new WpOrg\Requests\Session($user_input, $headers, $data, ["verify" => true]);
$session = new WpOrg\Requests\Session($user_input, options: ["verify" => true]);

$session->request($user_input, $headers, $data, Requests::HEAD, ["verifyname" => true]);

$session->request_multiple([
  ["url" => $url, "verify" => true, "verifyname" => true],
  ["url" => $url]
], []);
