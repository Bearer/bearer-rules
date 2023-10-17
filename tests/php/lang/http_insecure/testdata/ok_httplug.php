<?php

use Http\Discovery\HttpClientDiscovery;
use Http\Discovery\MessageFactoryDiscovery;

$secure_url = "https://ok.example.com";

$client = HttpClientDiscovery::find();
$messageFactory = MessageFactoryDiscovery::find();
$homeResponse = $client->sendRequest(
    $messageFactory->createRequest('GET', $secure_url)
);
