<?php

use Scoutapm\Agent;
use Scoutapm\ScoutApmAgent;

$agent = $container->get(ScoutApmAgent::class);
$agent->addContext("id", $user->email);

$agent2 = Agent::fromConfig($config, $logger, null, $connector);
$agent2->addContext("id", $user->email);

$span = $agent->startSpan("foo");
$span->tag("id", $user->email);
