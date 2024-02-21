<?php

$honeybadger = Honeybadger\Honeybadger::new(['api_key' => 'Your project API key']);

# bearer:expected php_third_parties_honeybadger
$honeybadger->addBreadcrumb("Email Sent", ["id" => $user->email ]);

# bearer:expected php_third_parties_honeybadger
$honeybadger->customNotification([
    'title'   => 'Special Error',
    'message' => "Special Error: {$user->email}",
]);

# bearer:expected php_third_parties_honeybadger
$honeybadger->context(['user_id' => $user->email]);
