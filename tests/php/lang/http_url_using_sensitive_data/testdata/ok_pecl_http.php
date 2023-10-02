<?php

use http\Client\Request;

$req = new Request("GET", $url);
$req->setQuery($ok);
$req->addQuery($ok);
