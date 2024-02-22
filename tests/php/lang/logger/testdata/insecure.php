<?php

$user = new User();
$name = $user->name;
# bearer:expected php_lang_logger
error_log($name);