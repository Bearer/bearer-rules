<?php

use Symfony\Component\HttpFoundation\Cookie;

$response->headers->setCookie(Cookie::create('foo', $user->email));
$response->headers->setCookie(new Cookie('foo', $user->email));
