<?php

newrelic_name_transaction("Processing {$user->id}");
newrelic_set_user_id($user->id);

newrelic_add_custom_parameter("id", $user->id);
newrelic_add_custom_span_parameter("id", $user->id);

newrelic_notice_error($user->id, $e);
newrelic_notice_error($errno, $user->id, $errfile, $errline, $errcontext);

newrelic_set_user_attributes($user->id, $user->id, $user->id);
