<?php

use http\Client\Request;

$req = new Request("GET", $url);

$sslOptions = ["verifyhost" => false, "verifypeer" => true];
# bearer:expected php_lang_ssl_verification
$req->setOptions(["ssl" => $sslOptions]);
# bearer:expected php_lang_ssl_verification
$req->setSslOptions($sslOptions);
# bearer:expected php_lang_ssl_verification
$req->addSslOptions($sslOptions);

$sslOptions = ["verifyhost" => true, "verifypeer" => false];
# bearer:expected php_lang_ssl_verification
$req->setOptions(["ssl" => $sslOptions]);
# bearer:expected php_lang_ssl_verification
$req->setSslOptions($sslOptions);
# bearer:expected php_lang_ssl_verification
$req->addSslOptions($sslOptions);

$client = new http\Client;
# bearer:expected php_lang_ssl_verification
$client->setOptions(["ssl" => $sslOptions]);
# bearer:expected php_lang_ssl_verification
$client->setSslOptions($sslOptions);
# bearer:expected php_lang_ssl_verification
$client->addSslOptions($sslOptions);
