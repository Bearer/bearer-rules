<?php

use Illuminate\Support\Facades\Http;

# bearer:expected php_lang_ssl_verification
Http::withoutVerifying()->get($url);
# bearer:expected php_lang_ssl_verification
Http::retry(3, 100)->withoutVerifying()->get($url);

$options = ["verify" => false];

# bearer:expected php_lang_ssl_verification
Http::withOptions($options)->get($url);
# bearer:expected php_lang_ssl_verification
Http::retry(3, 100)->withOptions($options)->get($url);
