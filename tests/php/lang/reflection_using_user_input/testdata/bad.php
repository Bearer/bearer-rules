<?php

$user_input = $_GET["name"] . ".php";

# bearer:expected php_lang_reflection_using_user_input
include $user_input;
# bearer:expected php_lang_reflection_using_user_input
include_once $user_input;
# bearer:expected php_lang_reflection_using_user_input
require $user_input;
# bearer:expected php_lang_reflection_using_user_input
require_once $user_input;

# bearer:expected php_lang_reflection_using_user_input
echo $$user_input;

# bearer:expected php_lang_reflection_using_user_input
$user_input(42);

# bearer:expected php_lang_reflection_using_user_input
$class = new ReflectionClass($user_input);
# bearer:expected php_lang_reflection_using_user_input
$class->getAttributes($user_input, 0);

# bearer:expected php_lang_reflection_using_user_input
new ReflectionClassConstant($user_input, $ok);
# bearer:expected php_lang_reflection_using_user_input
$constant = new ReflectionClassConstant($ok, $user_input);
# bearer:expected php_lang_reflection_using_user_input
ReflectionClassConstant::export($user_input, $ok, false);
