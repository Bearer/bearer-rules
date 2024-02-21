<?php

$client = new SendGrid\Client($url);

# bearer:expected php_lang_http_url_using_sensitive_data
$client->get($body, $user->email, $headers);
# bearer:expected php_lang_http_url_using_sensitive_data
$client->post($body, $user->email, $headers);
# bearer:expected php_lang_http_url_using_sensitive_data
$client->patch($body, $user->email, $headers);
# bearer:expected php_lang_http_url_using_sensitive_data
$client->put($body, $user->email, $headers);
# bearer:expected php_lang_http_url_using_sensitive_data
$client->delete($body, $user->email, $headers);
