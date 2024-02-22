<?php

use Buzz\Browser;

$user_input = "http://{$_GET['host']}";

$client = new FileGetContents(new Psr17ResponseFactory());
$browser = new Browser($client, new Psr17RequestFactory());

# bearer:expected php_lang_http_url_using_user_input
$browser->get($user_input, $headers);
# bearer:expected php_lang_http_url_using_user_input
$browser->post($user_input, $headers);
# bearer:expected php_lang_http_url_using_user_input
$browser->head($user_input, $headers);
# bearer:expected php_lang_http_url_using_user_input
$browser->patch($user_input, $headers);
# bearer:expected php_lang_http_url_using_user_input
$browser->put($user_input, $headers);
# bearer:expected php_lang_http_url_using_user_input
$browser->delete($user_input, $headers);

# bearer:expected php_lang_http_url_using_user_input
$browser->request("GET", $user_input, $headers);

# bearer:expected php_lang_http_url_using_user_input
$browser->submitForm($user_input, ['user' => 'Fred']);
