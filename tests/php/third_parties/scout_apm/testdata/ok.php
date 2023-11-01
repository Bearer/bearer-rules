<?php

use Scoutapm\Agent;
use Scoutapm\ScoutApmAgent;

$agent = $container->get(ScoutApmAgent::class);
$agent->addContext("id", $user->id);

$agent2 = Agent::fromConfig($config, $logger, null, $connector);
$agent2->addContext("id", $user->id);

$span = $agent->startSpan("foo");
$span->tag("id", $user->id);
