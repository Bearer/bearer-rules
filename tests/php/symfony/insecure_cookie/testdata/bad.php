<?php

use Symfony\Component\HttpFoundation\Cookie;

Cookie::create($name, $value, $expire, $path, $domain, false, $httpOnly);
Cookie::create($name, $value, secure: false);

$cookie = Cookie::create($name, $value);
$cookie->withRaw(false)->withSecure(false);

new Cookie($name, $value, $expire, $path, $domain, false, $httpOnly);
new Cookie($name, $value, secure: false);

$cookie = new Cookie($name, $value);
$cookie->withRaw(false)->withSecure(false);
