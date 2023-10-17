<?php
$filename = "newfile.csv";
$users = [
  ['email' => 'user1@example.com', 'address' => '123 Main St'],
  ['email' => 'user2@example.com', 'address' => '456 Elm St'],
];

$csvFile = fopen($filename, 'w');

if ($csvFile === false) {
  return false;
}

fputcsv($csvFile, ['Email', 'Address']);

foreach ($users as $user) {
  fputcsv($csvFile, [$user['email'], $user['address']]);
}

foreach ($users as $user) {
  fputcsv($csvFile, [$user['email'], $user['address']], ';');
}

fclose($csvFile);

?>