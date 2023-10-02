<?php

$filename = "newfile.csv";
$users = [
  ['email' => 'user1@example.com', 'address' => '123 Main St', 'uuid' => 'uuid-1'],
  ['email' => 'user2@example.com', 'address' => '456 Elm St', 'uuid' => 'uuid-2'],
];

$csvFile = fopen($filename, 'w');

if ($csvFile === false) {
  return false;
}

fputcsv($csvFile, ['uuid']);

foreach ($users as $user) {
  fputcsv($csvFile, [$user['uuid']]);
}

fclose($csvFile);

?>

?>