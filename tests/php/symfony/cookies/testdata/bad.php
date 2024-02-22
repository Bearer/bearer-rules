<?php

use Symfony\Component\HttpFoundation\Cookie;

# bearer:expected php_symfony_cookies
$response->headers->setCookie(Cookie::create('foo', $user->email));
# bearer:expected php_symfony_cookies
$response->headers->setCookie(new Cookie('foo', $user->email));
