<?php

use Google\Cloud\BigQuery\BigQueryClient;

$bigQuery = new BigQueryClient();
$dataset = $bigQuery->dataset("my_dataset");

$table = $dataset->table("my_table");
$table->insertRow([ "email" => $user->email ]);
$table->insertRows([[ "email" => $user->email ]]);

$table2 = $dataset->createTable("my_table2");
$table2->insertRow([ "email" => $user->email ]);
$table2->insertRows([[ "email" => $user->email ]]);
