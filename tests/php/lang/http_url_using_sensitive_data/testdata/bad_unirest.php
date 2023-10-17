<?php

Unirest\Request::get($url, $headers, $user->email, $username);
Unirest\Request::get($url, parameters: $user->email);

Unirest\Request::send("GET", $url, $headers, $user->email, $username);
Unirest\Request::send("GET", $url, parameters: $user->email);
