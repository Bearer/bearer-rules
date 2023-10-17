<?php

use Buzz\Browser;

$secure_url = "https://ok.example.com";

$client = new FileGetContents(new Psr17ResponseFactory());
$browser = new Browser($client, new Psr17RequestFactory());

$browser->get($secure_url, $headers);

$browser->request("GET", $secure_url, $headers);

$browser->submitForm($secure_url, ['user' => 'Fred']);
