<?php

$insecure_url = "http://oops.example.com";

use WpOrg\Requests\Requests;

Requests::get($insecure_url, $headers);
Requests::head($insecure_url, $headers);
Requests::delete($insecure_url, $headers);
Requests::trace($insecure_url, $headers);
Requests::post($insecure_url, $headers);
Requests::put($insecure_url, $headers);
Requests::options($insecure_url, $headers);
Requests::patch($insecure_url, $headers);
Requests::request($insecure_url, $headers);

WpOrg\Requests\Requests::request_multiple([
  "one" => ["headers" => $headers, "url" => $insecure_url],
  "two" => ["headers" => $headers, "url" => "https://ok.example.com"]
], []);

$session = new WpOrg\Requests\Session($insecure_url, $headers);

$session->get($insecure_url, $headers);
$session->head($insecure_url, $headers);
$session->delete($insecure_url, $headers);
$session->post($insecure_url, $headers);
$session->put($insecure_url, $headers);
$session->patch($insecure_url, $headers);
$session->request($insecure_url, $headers);

$session->request_multiple([
  ["headers" => $headers, "url" => $insecure_url],
  ["headers" => $headers, "url" => "https://ok.example.com"]
], []);
