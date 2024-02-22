<?php

use Http\Message\Authentication\QueryParam;

# bearer:expected php_lang_http_url_using_sensitive_data
$authentication = new QueryParam([
  'user' => $user->email,
]);
