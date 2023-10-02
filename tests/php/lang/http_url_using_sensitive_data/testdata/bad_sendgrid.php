<?php

$client = new SendGrid\Client($url);

$client->get($body, $user->email, $headers);
$client->post($body, $user->email, $headers);
$client->patch($body, $user->email, $headers);
$client->put($body, $user->email, $headers);
$client->delete($body, $user->email, $headers);
