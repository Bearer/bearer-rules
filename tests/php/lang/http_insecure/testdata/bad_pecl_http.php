<?php

use http\Client\Request;

$insecure_url = "http://oops.example.com";

$req = new Request("GET", $insecure_url);
