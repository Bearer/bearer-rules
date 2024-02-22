<?php

use Illuminate\Support\Facades\Http;

$insecure_url = "http://oops.example.com";

# bearer:expected php_lang_http_insecure
Http::head($insecure_url, []);
# bearer:expected php_lang_http_insecure
Http::get($insecure_url, []);
# bearer:expected php_lang_http_insecure
Http::post($insecure_url, []);
# bearer:expected php_lang_http_insecure
Http::put($insecure_url, []);
# bearer:expected php_lang_http_insecure
Http::patch($insecure_url, []);
# bearer:expected php_lang_http_insecure
Http::delete($insecure_url, []);

# bearer:expected php_lang_http_insecure
Http::withUrlParameters([
  'endpoint' => $insecure_url,
  'page' => 'docs',
])->get('{+endpoint}/{page}');

# bearer:expected php_lang_http_insecure
Http::withQueryParameters([
    'name' => 'Taylor',
    'page' => 1,
])->get($insecure_url);
