<?php

$secure_url = "https://ok.example.com";

use WpOrg\Requests\Requests;

Requests::get($secure_url, $headers);

WpOrg\Requests\Requests::request_multiple([
  "one" => ["headers" => $headers, "url" => $secure_url],
], []);

$session = new WpOrg\Requests\Session($secure_url, $headers);

$session->get($secure_url, $headers);

$session->request_multiple([
  ["headers" => $headers, "url" => $secure_url],
], []);
