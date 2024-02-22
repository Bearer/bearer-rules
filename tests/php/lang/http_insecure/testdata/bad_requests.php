<?php

$insecure_url = "http://oops.example.com";

use WpOrg\Requests\Requests;

# bearer:expected php_lang_http_insecure
Requests::get($insecure_url, $headers);
# bearer:expected php_lang_http_insecure
Requests::head($insecure_url, $headers);
# bearer:expected php_lang_http_insecure
Requests::delete($insecure_url, $headers);
# bearer:expected php_lang_http_insecure
Requests::trace($insecure_url, $headers);
# bearer:expected php_lang_http_insecure
Requests::post($insecure_url, $headers);
# bearer:expected php_lang_http_insecure
Requests::put($insecure_url, $headers);
# bearer:expected php_lang_http_insecure
Requests::options($insecure_url, $headers);
# bearer:expected php_lang_http_insecure
Requests::patch($insecure_url, $headers);
# bearer:expected php_lang_http_insecure
Requests::request($insecure_url, $headers);

# bearer:expected php_lang_http_insecure
WpOrg\Requests\Requests::request_multiple([
  "one" => ["headers" => $headers, "url" => $insecure_url],
  "two" => ["headers" => $headers, "url" => "https://ok.example.com"]
], []);

# bearer:expected php_lang_http_insecure
$session = new WpOrg\Requests\Session($insecure_url, $headers);

# bearer:expected php_lang_http_insecure
$session->get($insecure_url, $headers);
# bearer:expected php_lang_http_insecure
$session->head($insecure_url, $headers);
# bearer:expected php_lang_http_insecure
$session->delete($insecure_url, $headers);
# bearer:expected php_lang_http_insecure
$session->post($insecure_url, $headers);
# bearer:expected php_lang_http_insecure
$session->put($insecure_url, $headers);
# bearer:expected php_lang_http_insecure
$session->patch($insecure_url, $headers);
# bearer:expected php_lang_http_insecure
$session->request($insecure_url, $headers);

# bearer:expected php_lang_http_insecure
$session->request_multiple([
  ["headers" => $headers, "url" => $insecure_url],
  ["headers" => $headers, "url" => "https://ok.example.com"]
], []);
