<?php

$secure_url = "https://ok.example.com";

Unirest\Request::get($secure_url, $headers);

Unirest\Request::send("GET", $secure_url, $headers);
