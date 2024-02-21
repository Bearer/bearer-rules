<?php

# bearer:expected php_lang_http_url_using_sensitive_data
Unirest\Request::get($url, $headers, $user->email, $username);
# bearer:expected php_lang_http_url_using_sensitive_data
Unirest\Request::get($url, parameters: $user->email);

# bearer:expected php_lang_http_url_using_sensitive_data
Unirest\Request::send("GET", $url, $headers, $user->email, $username);
# bearer:expected php_lang_http_url_using_sensitive_data
Unirest\Request::send("GET", $url, parameters: $user->email);
