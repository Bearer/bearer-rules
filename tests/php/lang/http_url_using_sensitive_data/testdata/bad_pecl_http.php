<?php

use http\Client\Request;

$req = new Request("GET", $url);
$req->setQuery($user->email);
$req->addQuery($user->email);
