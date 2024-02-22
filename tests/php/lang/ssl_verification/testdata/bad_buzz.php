<?php

use Buzz\Client\FileGetContents;

$options = ['verify' => false];

# bearer:expected php_lang_ssl_verification
$client = new FileGetContents(new Psr17Factory(), $options);
# bearer:expected php_lang_ssl_verification
$client = new Buzz\Client\Other(new Psr17Factory(), $options);

# bearer:expected php_lang_ssl_verification
$client->sendRequest($request, $options);

$browser = new Browser($client, new Psr17RequestFactory());
# bearer:expected php_lang_ssl_verification
$browser->sendRequest($request, $options);
