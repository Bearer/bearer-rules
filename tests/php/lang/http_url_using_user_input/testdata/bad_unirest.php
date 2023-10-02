<?php

$user_input = "http://{$_GET['host']}";

Unirest\Request::get($user_input, $headers);
Unirest\Request::head($user_input, $headers);
Unirest\Request::options($user_input, $headers);
Unirest\Request::connect($user_input, $headers);
Unirest\Request::post($user_input, $headers);
Unirest\Request::put($user_input, $headers);
Unirest\Request::patch($user_input, $headers);
Unirest\Request::trace($user_input, $headers);
Unirest\Request::delete($user_input, $headers);

Unirest\Request::send("GET", $user_input, $headers);
