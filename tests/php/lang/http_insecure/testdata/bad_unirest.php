<?php

$insecure_url = "http://oops.example.com";

# bearer:expected php_lang_http_insecure
Unirest\Request::get($insecure_url, $headers);
# bearer:expected php_lang_http_insecure
Unirest\Request::post($insecure_url, $headers);
# bearer:expected php_lang_http_insecure
Unirest\Request::put($insecure_url, $headers);
# bearer:expected php_lang_http_insecure
Unirest\Request::patch($insecure_url, $headers);
# bearer:expected php_lang_http_insecure
Unirest\Request::delete($insecure_url, $headers);

# bearer:expected php_lang_http_insecure
Unirest\Request::send("GET", $insecure_url, $headers);
