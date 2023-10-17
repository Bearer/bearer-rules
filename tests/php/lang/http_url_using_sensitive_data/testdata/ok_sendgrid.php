<?php

$client = new SendGrid\Client($url);

$client->get($body, $ok, $headers);
$client->post($body, $ok, $headers);
$client->patch($body, $ok, $headers);
$client->put($body, $ok, $headers);
$client->delete($body, $ok, $headers);
