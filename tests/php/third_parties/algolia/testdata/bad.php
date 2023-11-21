<?php

use Algolia\AlgoliaSearch\SearchClient;

$client = SearchClient::create('YourApplicationID', 'YourWriteAPIKey');
$index = $client->initIndex("my_index");

$index->saveObject([ "email" => $user->email ], $options);
$index->saveObjects([[ "email" => $user->email ]], $options);
$index->partialUpdateObject([ "email" => $user->email ], $options);
$index->partialUpdateObjects([[ "email" => $user->email ]], $options);
$index->replaceAllObjects([[ "email" => $user->email ]], $options);
