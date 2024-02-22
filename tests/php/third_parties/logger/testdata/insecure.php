<?php

$user = array('email' => 'user@email.com', 'uuid' => 'unique-identifier');
# bearer:expected php_third_parties_logger
$log->info('Adding a new user', $user->email());
# bearer:expected php_third_parties_logger
$log->info('Adding a new user', $user->email);
# bearer:expected php_third_parties_logger
$log->info('Adding a new user', $user["email"]);
# bearer:expected php_third_parties_logger
$log->info('Adding a new user', $user);

# bearer:expected php_third_parties_logger
$this->logger->info('Adding a new user', $user);
# bearer:expected php_third_parties_logger
$this->log->info('Adding a new user', $user);
