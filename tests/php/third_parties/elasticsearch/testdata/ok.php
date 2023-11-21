<?php

use Elastic\Elasticsearch\ClientBuilder;

$client = ClientBuilder::create()
   ->setApiKey('<api-key>')
   ->build();

$client->index(["index" => 'users', "body" => ["user" => $user->id]]);
$client->update(["index" => 'books', "id" => 42, "body" => ["user" => $user->id]]);

$bulkBody = [
  ["index" => ["_index" => 'users', "_id" => '42']],
  ["user" => $user->id]
];

$client->bulk(["body" => $bulkBody]);

$client2 = new \Elastic\Elasticsearch\Client($transport, $logger);
$client2->index(["index" => 'users', "body" => ["user" => $user->id]]);
