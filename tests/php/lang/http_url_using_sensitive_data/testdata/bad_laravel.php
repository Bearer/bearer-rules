<?php

use Illuminate\Support\Facades\Http;

# bearer:expected php_lang_http_url_using_sensitive_data
Http::head($url, $user->email);

# bearer:expected php_lang_http_url_using_sensitive_data
Http::withQueryParameters([
  'user' => $user->email,
  'page' => 1,
])->get($url);

# bearer:expected php_lang_http_url_using_sensitive_data
Http::retry(3, 100)->withQueryParameters([
  'user' => $user->email,
  'page' => 1,
])->get($url);

# bearer:expected php_lang_http_url_using_sensitive_data
Http::retry(3, 100)->get($url, $user->email);

# bearer:expected php_lang_http_url_using_sensitive_data
Http::send("GET", $url, ["query" => $user->email]);
# bearer:expected php_lang_http_url_using_sensitive_data
Http::retry(3, 100)->send("GET", $url, ["query" => $user->email]);
