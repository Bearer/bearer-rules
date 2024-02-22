<?php

$user_input = "http://{$_GET['host']}";

# bearer:expected php_lang_http_url_using_user_input
Unirest\Request::get($user_input, $headers);
# bearer:expected php_lang_http_url_using_user_input
Unirest\Request::head($user_input, $headers);
# bearer:expected php_lang_http_url_using_user_input
Unirest\Request::options($user_input, $headers);
# bearer:expected php_lang_http_url_using_user_input
Unirest\Request::connect($user_input, $headers);
# bearer:expected php_lang_http_url_using_user_input
Unirest\Request::post($user_input, $headers);
# bearer:expected php_lang_http_url_using_user_input
Unirest\Request::put($user_input, $headers);
# bearer:expected php_lang_http_url_using_user_input
Unirest\Request::patch($user_input, $headers);
# bearer:expected php_lang_http_url_using_user_input
Unirest\Request::trace($user_input, $headers);
# bearer:expected php_lang_http_url_using_user_input
Unirest\Request::delete($user_input, $headers);

# bearer:expected php_lang_http_url_using_user_input
Unirest\Request::send("GET", $user_input, $headers);
