<?php

$client = new SendGrid\Client($url, $headers, $version, $path, $curlOptions, $retry, false);
$client = new SendGrid\Client($url, verifySSLCerts: false);
