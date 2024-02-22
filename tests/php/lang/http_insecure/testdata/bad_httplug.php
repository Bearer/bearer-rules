<?php

use Http\Discovery\HttpClientDiscovery;
use Http\Discovery\MessageFactoryDiscovery;

$insecure_url = "http://oops.example.com";

$client = HttpClientDiscovery::find();
$messageFactory = MessageFactoryDiscovery::find();
$homeResponse = $client->sendRequest(
# bearer:expected php_lang_http_insecure
    $messageFactory->createRequest('GET', $insecure_url)
);
