<?php

$user = array('email' => 'user@email.com', 'uuid' => 'unique-identifier');
$log->info('Adding a new user', $user.email);
$log->info('Adding a new user', $user["email"]);
