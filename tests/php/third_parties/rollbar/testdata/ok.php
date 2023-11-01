<?php

use Rollbar\Rollbar;
use Rollbar\Payload\Level;
use Rollbar\RollbarLogger;

Rollbar::log(Level::WARNING, "could not connect for {$user->id}");
Rollbar::log(Level::INFO, 'Foo', array('id' => $user->id));

$logger = $container->get(RollbarLogger::class);
$logger->log($level, $message, ['id' => $user->id]);

$logger2 = Rollbar::logger();
$logger2->addCustom($key, $user->id);
