<?php

$insecure_url = "http://oops.example.com";

Unirest\Request::get($insecure_url, $headers);
Unirest\Request::post($insecure_url, $headers);
Unirest\Request::put($insecure_url, $headers);
Unirest\Request::patch($insecure_url, $headers);
Unirest\Request::delete($insecure_url, $headers);

Unirest\Request::send("GET", $insecure_url, $headers);
