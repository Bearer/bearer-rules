<?php

use Symfony\Component\HttpFoundation\Cookie;

$response->headers->setCookie(Cookie::create('foo', $ok));
$response->headers->setCookie(new Cookie('foo', $ok));
