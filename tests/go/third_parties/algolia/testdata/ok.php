<?php

use Algolia\AlgoliaSearch\SearchClient;

$client = SearchClient::create('YourApplicationID', 'YourWriteAPIKey');
$index = $client->initIndex("my_index");

$index->saveObject([ "email" => $user->id ], $options);
$index->saveObjects([[ "email" => $user->id ]], $options);
$index->partialUpdateObject([ "email" => $user->id ], $options);
$index->partialUpdateObjects([[ "email" => $user->id ]], $options);
$index->replaceAllObjects([[ "email" => $user->id ]], $options);
