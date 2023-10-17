<?php

use Laminas\Http\Client;

$client = new Client("http://example.com", [
  'maxredirects' => 0,
  'timeout'      => 30,
]);

$client->setParameterGet([
  "data" => $user->email
]);

$request = new Laminas\Http\Request();
$query = $request->getQuery();
$query->set("x", $user->email);
$query->offsetSet("y", $user->email);
$query->z = $user->email;
