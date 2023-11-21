<?php

use Google\Cloud\BigQuery\BigQueryClient;

$bigQuery = new BigQueryClient();
$dataset = $bigQuery->dataset("my_dataset");

$table = $dataset->table("my_table");
$table->insertRow([ "id" => $user->id ]);
$table->insertRows([[ "id" => $user->id ]]);

$table2 = $dataset->createTable("my_table2");
$table2->insertRow([ "id" => $user->id ]);
$table2->insertRows([[ "id" => $user->id ]]);
