<?php

use Symfony\Component\HttpFoundation\Cookie;

Cookie::create($name, $value, $expire, $path, $domain, false, $httpOnly);
Cookie::create($name, $value, secure: false);
Cookie::create($name, $value, $expire, $path, $domain, $secure, false, $raw);
Cookie::create($name, $value, httpOnly: false);

$cookie = Cookie::create($name, $value);
$cookie->withRaw(false)->withSecure(false);
$cookie->withRaw(false)->withHttpOnly(false);

new Cookie($name, $value, $expire, $path, $domain, false, $httpOnly);
new Cookie($name, $value, secure: false);
new Cookie($name, $value, $expire, $path, $domain, $secure, false, $raw);
new Cookie($name, $value, httpOnly: false);

$cookie = new Cookie($name, $value);
$cookie->withRaw(false)->withSecure(false);
$cookie->withRaw(false)->withHttpOnly(false);
