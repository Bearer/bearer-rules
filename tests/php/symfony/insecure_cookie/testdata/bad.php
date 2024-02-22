<?php

use Symfony\Component\HttpFoundation\Cookie;

# bearer:expected php_symfony_insecure_cookie
Cookie::create($name, $value, $expire, $path, $domain, false, $httpOnly);
# bearer:expected php_symfony_insecure_cookie
Cookie::create($name, $value, secure: false);

$cookie = Cookie::create($name, $value);
# bearer:expected php_symfony_insecure_cookie
$cookie->withRaw(false)->withSecure(false);

# bearer:expected php_symfony_insecure_cookie
new Cookie($name, $value, $expire, $path, $domain, false, $httpOnly);
# bearer:expected php_symfony_insecure_cookie
new Cookie($name, $value, secure: false);

$cookie = new Cookie($name, $value);
# bearer:expected php_symfony_insecure_cookie
$cookie->withRaw(false)->withSecure(false);
