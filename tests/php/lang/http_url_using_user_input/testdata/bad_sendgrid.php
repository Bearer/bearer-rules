<?php

$user_input = "http://{$_GET['host']}";

# bearer:expected php_lang_http_url_using_user_input
new SendGrid\Client($user_input, $authHeaders);
