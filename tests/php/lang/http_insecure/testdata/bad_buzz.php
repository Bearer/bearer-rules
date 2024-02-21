<?php

use Buzz\Browser;

$insecure_url = "http://oops.example.com";

$client = new FileGetContents(new Psr17ResponseFactory());
$browser = new Browser($client, new Psr17RequestFactory());

# bearer:expected php_lang_http_insecure
$browser->get($insecure_url, $headers);
# bearer:expected php_lang_http_insecure
$browser->post($insecure_url, $headers);
# bearer:expected php_lang_http_insecure
$browser->head($insecure_url, $headers);
# bearer:expected php_lang_http_insecure
$browser->patch($insecure_url, $headers);
# bearer:expected php_lang_http_insecure
$browser->put($insecure_url, $headers);
# bearer:expected php_lang_http_insecure
$browser->delete($insecure_url, $headers);

# bearer:expected php_lang_http_insecure
$browser->request("GET", $insecure_url, $headers);

# bearer:expected php_lang_http_insecure
$browser->submitForm($insecure_url, ['user' => 'Fred']);
