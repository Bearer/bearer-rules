<?php

# bearer:expected php_lang_ssl_verification
$client = new SendGrid\Client($url, $headers, $version, $path, $curlOptions, $retry, false);
# bearer:expected php_lang_ssl_verification
$client = new SendGrid\Client($url, verifySSLCerts: false);
