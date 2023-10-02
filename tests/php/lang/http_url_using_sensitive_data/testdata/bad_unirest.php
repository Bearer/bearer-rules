<?php

Unirest\Request::get($url, $headers, $user->email, $username);

Unirest\Request::send("GET", $url, $headers, $user->email, $username);
