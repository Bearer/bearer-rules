<?php

include $ok;
include_once $ok;
require $ok;
require_once $ok;

echo $$ok;

$ok(42);

$class = new ReflectionClass($ok);
$class->getAttributes($ok, 0);

new ReflectionClassConstant($ok, $ok);
$constant = new ReflectionClassConstant($ok, $ok);
ReflectionClassConstant::export($ok, $ok, false);
