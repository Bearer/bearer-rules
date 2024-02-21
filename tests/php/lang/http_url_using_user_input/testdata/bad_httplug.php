<?php

use Http\Discovery\HttpClientDiscovery;
use Http\Discovery\MessageFactoryDiscovery;

$user_input = "http://{$_GET['host']}";

$client = HttpClientDiscovery::find();
$messageFactory = MessageFactoryDiscovery::find();
$homeResponse = $client->sendRequest(
# bearer:expected php_lang_http_url_using_user_input
    $messageFactory->createRequest('GET', $user_input)
);
