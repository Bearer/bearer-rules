<?php

use Symfony\Component\HttpFoundation\Cookie;

Cookie::create($name, $value, $expire, $path, $domain, true, $httpOnly);
Cookie::create($name, $value, $expire, $path, $domain, null, $httpOnly);
Cookie::create($name, $value, secure: true);
Cookie::create($name, $value, secure: null);
Cookie::create($name, $value, $expire, $path, $domain, $secure, true, $raw);
Cookie::create($name, $value, httpOnly: true);

$cookie = Cookie::create($name, $value);
$cookie->withRaw(false)->withSecure(null);
$cookie->withRaw(false)->withSecure(true);
$cookie->withRaw(false)->withHttpOnly(true);

new Cookie($name, $value, $expire, $path, $domain, true, $httpOnly);
new Cookie($name, $value, $expire, $path, $domain, null, $httpOnly);
new Cookie($name, $value, secure: true);
new Cookie($name, $value, secure: null);
new Cookie($name, $value, $expire, $path, $domain, $secure, true, $raw);
new Cookie($name, $value, httpOnly: true);

$cookie = new Cookie($name, $value);
$cookie->withRaw(false)->withSecure(true);
$cookie->withRaw(false)->withSecure(null);
$cookie->withRaw(false)->withHttpOnly(true);
