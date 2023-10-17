<?php

use http\Client\Request;

$user_input = "http://{$_GET['host']}";

$req = new Request("GET", $user_input);
