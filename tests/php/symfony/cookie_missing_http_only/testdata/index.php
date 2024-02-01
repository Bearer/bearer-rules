// Use bearer:expected php_symfony_cookie_missing_http_only to flag expected findings

<?php

use Symfony\Component\HttpFoundation\Cookie;

Cookie::create($name, $value, $expire, $path, $domain, false, $httpOnly);
// bearer:expected php_symfony_cookie_missing_http_only
Cookie::create($name, $value, $expire, $path, $domain, $secure, false, $raw);
// bearer:expected php_symfony_cookie_missing_http_only
Cookie::create($name, $value, httpOnly: false);

$cookie = Cookie::create($name, $value);
// bearer:expected php_symfony_cookie_missing_http_only
$cookie->withRaw(false)->withHttpOnly(false);

new Cookie($name, $value, secure: false);
// bearer:expected php_symfony_cookie_missing_http_only
new Cookie($name, $value, $expire, $path, $domain, $secure, false, $raw);
// bearer:expected php_symfony_cookie_missing_http_only
new Cookie($name, $value, httpOnly: false);

$cookie = new Cookie($name, $value);
$cookie->withRaw(false)->withSecure(false);
// bearer:expected php_symfony_cookie_missing_http_only
$cookie->withRaw(false)->withHttpOnly(false);