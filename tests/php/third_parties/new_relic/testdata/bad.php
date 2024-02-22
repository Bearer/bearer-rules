<?php

# bearer:expected php_third_parties_new_relic
newrelic_name_transaction("Processing {$user->email}");
# bearer:expected php_third_parties_new_relic
newrelic_set_user_id($user->email);

# bearer:expected php_third_parties_new_relic
newrelic_add_custom_parameter("id", $user->email);
# bearer:expected php_third_parties_new_relic
newrelic_add_custom_span_parameter("id", $user->email);

# bearer:expected php_third_parties_new_relic
newrelic_notice_error($user->email, $e);
# bearer:expected php_third_parties_new_relic
newrelic_notice_error($errno, $user->email, $errfile, $errline, $errcontext);

# bearer:expected php_third_parties_new_relic
newrelic_set_user_attributes($user->email, $account_value, $product_value);
# bearer:expected php_third_parties_new_relic
newrelic_set_user_attributes($user_value, $user->email, $product_value);
# bearer:expected php_third_parties_new_relic
newrelic_set_user_attributes($user_value, $account_value, $user->email);
