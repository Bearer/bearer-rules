<?php

use Illuminate\Support\Facades\Http;

$user_input = "http://{$_GET['host']}";

# bearer:expected php_lang_http_url_using_user_input
Http::head($user_input, []);
# bearer:expected php_lang_http_url_using_user_input
Http::get($user_input, []);
# bearer:expected php_lang_http_url_using_user_input
Http::post($user_input, []);
# bearer:expected php_lang_http_url_using_user_input
Http::put($user_input, []);
# bearer:expected php_lang_http_url_using_user_input
Http::patch($user_input, []);
# bearer:expected php_lang_http_url_using_user_input
Http::delete($user_input, []);

# bearer:expected php_lang_http_url_using_user_input
Http::withUrlParameters([
  'endpoint' => $user_input,
  'page' => 'docs',
])->get('{+endpoint}/{page}');

# bearer:expected php_lang_http_url_using_user_input
Http::withQueryParameters([
    'name' => 'Taylor',
    'page' => 1,
])->get($user_input);
