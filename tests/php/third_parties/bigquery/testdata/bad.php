<?php

use Google\Cloud\BigQuery\BigQueryClient;

$bigQuery = new BigQueryClient();
$dataset = $bigQuery->dataset("my_dataset");

$table = $dataset->table("my_table");
# bearer:expected php_third_parties_bigquery
$table->insertRow([ "email" => $user->email ]);
# bearer:expected php_third_parties_bigquery
$table->insertRows([[ "email" => $user->email ]]);

$table2 = $dataset->createTable("my_table2");
# bearer:expected php_third_parties_bigquery
$table2->insertRow([ "email" => $user->email ]);
# bearer:expected php_third_parties_bigquery
$table2->insertRows([[ "email" => $user->email ]]);
