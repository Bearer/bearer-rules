<?php

newrelic_name_transaction("Processing {$user->email}");
newrelic_set_user_id($user->email);

newrelic_add_custom_parameter("id", $user->email);
newrelic_add_custom_span_parameter("id", $user->email);

newrelic_notice_error($user->email, $e);
newrelic_notice_error($errno, $user->email, $errfile, $errline, $errcontext);

newrelic_set_user_attributes($user->email, $account_value, $product_value);
newrelic_set_user_attributes($user_value, $user->email, $product_value);
newrelic_set_user_attributes($user_value, $account_value, $user->email);
