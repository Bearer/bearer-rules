<?php

$client = new SendGrid\Client($url, $headers, $version, $path, $curlOptions, $retry, true);
$client = new SendGrid\Client($url, verifySSLCerts: true);
