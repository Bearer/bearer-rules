<?php

$honeybadger = Honeybadger\Honeybadger::new(['api_key' => 'Your project API key']);

$honeybadger->addBreadcrumb("Email Sent", ["id" => $user->email ]);

$honeybadger->customNotification([
    'title'   => 'Special Error',
    'message' => "Special Error: {$user->email}",
]);

$honeybadger->context(['user_id' => $user->email]);
