<?php

Unirest\Request::get($url, $headers, $ok, $username);
Unirest\Request::get($url, parameters: $ok);

Unirest\Request::send("GET", $url, $headers, $ok, $username);
Unirest\Request::send("GET", $url, parameters: $ok);
Unirest\Request::send("POST", $url, $headers, $user->email, $username);
