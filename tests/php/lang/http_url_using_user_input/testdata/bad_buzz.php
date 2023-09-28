<?php

use Buzz\Browser;

$user_input = "http://{$_GET['host']}";

$client = new FileGetContents(new Psr17ResponseFactory());
$browser = new Browser($client, new Psr17RequestFactory());

$browser->get($user_input, $headers);
$browser->post($user_input, $headers);
$browser->head($user_input, $headers);
$browser->patch($user_input, $headers);
$browser->put($user_input, $headers);
$browser->delete($user_input, $headers);

$browser->request("GET", $user_input, $headers);

$browser->submitForm($user_input, ['user' => 'Fred']);
