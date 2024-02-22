<?php

# bearer:expected php_lang_http_url_using_sensitive_data
$curl = curl_init("http://example.com/{$user->email}");
