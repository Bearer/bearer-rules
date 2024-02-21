<?php

use Scoutapm\Agent;
use Scoutapm\ScoutApmAgent;

$agent = $container->get(ScoutApmAgent::class);
# bearer:expected php_third_parties_scout_apm
$agent->addContext("id", $user->email);

$agent2 = Agent::fromConfig($config, $logger, null, $connector);
# bearer:expected php_third_parties_scout_apm
$agent2->addContext("id", $user->email);

$span = $agent->startSpan("foo");
# bearer:expected php_third_parties_scout_apm
$span->tag("id", $user->email);
