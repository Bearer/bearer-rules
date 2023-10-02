<?php

$user_input = $_GET["name"] . ".php";

include $user_input;
include_once $user_input;
require $user_input;
require_once $user_input;

echo $$user_input;

$user_input(42);

$class = new ReflectionClass($user_input);
$class->getAttributes($user_input, 0);

new ReflectionClassConstant($user_input, $ok);
$constant = new ReflectionClassConstant($ok, $user_input);
ReflectionClassConstant::export($user_input, $ok, false);
