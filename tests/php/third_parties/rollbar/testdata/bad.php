<?php

use Rollbar\Rollbar;
use Rollbar\Payload\Level;
use Rollbar\RollbarLogger;

# bearer:expected php_third_parties_rollbar
Rollbar::log(Level::WARNING, "could not connect for {$user->email}");
# bearer:expected php_third_parties_rollbar
Rollbar::log(Level::INFO, 'Foo', array('id' => $user->email));

$logger = $container->get(RollbarLogger::class);
# bearer:expected php_third_parties_rollbar
$logger->log($level, $message, ['id' => $user->email]);

$logger2 = Rollbar::logger();
# bearer:expected php_third_parties_rollbar
$logger2->addCustom($key, $user->email);
