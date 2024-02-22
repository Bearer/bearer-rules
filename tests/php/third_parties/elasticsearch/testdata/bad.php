<?php

use Elastic\Elasticsearch\ClientBuilder;

$client = ClientBuilder::create()
   ->setApiKey('<api-key>')
   ->build();

# bearer:expected php_third_parties_elasticsearch
$client->index(["index" => 'users', "body" => ["user" => $user->email]]);
# bearer:expected php_third_parties_elasticsearch
$client->update(["index" => 'books', "id" => 42, "body" => ["user" => $user->email]]);

$bulkBody = [
  ["index" => ["_index" => 'users', "_id" => '42']],
  ["user" => $user->email]
];

# bearer:expected php_third_parties_elasticsearch
$client->bulk(["body" => $bulkBody]);

$client2 = new \Elastic\Elasticsearch\Client($transport, $logger);
# bearer:expected php_third_parties_elasticsearch
$client2->index(["index" => 'users', "body" => ["user" => $user->email]]);
