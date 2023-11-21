<?php

$honeybadger = Honeybadger\Honeybadger::new(['api_key' => 'Your project API key']);

$honeybadger->addBreadcrumb("Email Sent", ["id" => $user->id ]);

$honeybadger->customNotification([
    'title'   => 'Special Error',
    'message' => "Special Error: {$user->id}",
]);

$honeybadger->context(['user_id' => $user->id]);
