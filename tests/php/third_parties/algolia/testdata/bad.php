<?php

use Algolia\AlgoliaSearch\SearchClient;

$client = SearchClient::create('YourApplicationID', 'YourWriteAPIKey');
$index = $client->initIndex("my_index");

# bearer:expected php_third_parties_algolia
$index->saveObject([ "email" => $user->email ], $options);
# bearer:expected php_third_parties_algolia
$index->saveObjects([[ "email" => $user->email ]], $options);
# bearer:expected php_third_parties_algolia
$index->partialUpdateObject([ "email" => $user->email ], $options);
# bearer:expected php_third_parties_algolia
$index->partialUpdateObjects([[ "email" => $user->email ]], $options);
# bearer:expected php_third_parties_algolia
$index->replaceAllObjects([[ "email" => $user->email ]], $options);
