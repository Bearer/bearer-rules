<?php

use http\Client\Request;

$req = new Request("GET", $url);

$sslOptions = ["verifyhost" => true, "verifypeer" => true];

$req->setOptions(["ssl" => $sslOptions]);
$req->setSslOptions($sslOptions);
$req->addSslOptions($sslOptions);

$client = new http\Client;
$client->setOptions(["ssl" => $sslOptions]);
$client->setSslOptions($sslOptions);
$client->addSslOptions($sslOptions);
