<?php

use Buzz\Client\FileGetContents;

$options = ['verify' => true];

$client = new FileGetContents(new Psr17Factory(), $options);
$client = new Buzz\Client\Other(new Psr17Factory(), $options);

$client->sendRequest($request, $options);

$browser = new Browser($client, new Psr17RequestFactory());
$browser->sendRequest($request, $options);
