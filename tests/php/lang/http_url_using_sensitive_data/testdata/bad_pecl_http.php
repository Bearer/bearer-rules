<?php

use http\Client\Request;

$req = new Request("GET", $url);
# bearer:expected php_lang_http_url_using_sensitive_data
$req->setQuery($user->email);
# bearer:expected php_lang_http_url_using_sensitive_data
$req->addQuery($user->email);
