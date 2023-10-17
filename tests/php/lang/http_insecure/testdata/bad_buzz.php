<?php

use Buzz\Browser;

$insecure_url = "http://oops.example.com";

$client = new FileGetContents(new Psr17ResponseFactory());
$browser = new Browser($client, new Psr17RequestFactory());

$browser->get($insecure_url, $headers);
$browser->post($insecure_url, $headers);
$browser->head($insecure_url, $headers);
$browser->patch($insecure_url, $headers);
$browser->put($insecure_url, $headers);
$browser->delete($insecure_url, $headers);

$browser->request("GET", $insecure_url, $headers);

$browser->submitForm($insecure_url, ['user' => 'Fred']);
