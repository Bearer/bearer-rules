<?php

use Laminas\Http\Client;

$client = new Client("http://example.com", [
  'maxredirects' => 0,
  'timeout'      => 30,
]);

$client->setParameterGet([
  "data" => $ok
]);

$request = new Laminas\Http\Request();
$query = $request->getQuery();
$query->set("x", $ok);
$query->offsetSet("y", $ok);
$query->z = $ok;
