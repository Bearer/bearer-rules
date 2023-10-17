<?php

$insecure_url = "http://oops.example.com";

$curl = curl_init($insecure_url);
curl_setopt($curl, CURLOPT_URL, $insecure_url);

file_get_contents($insecure_url, true);
fopen($insecure_url, "r");

$request = new http\Client\Request("GET", $insecure_url, ["User-Agent"=>"My Client/0.1"]);

$soap_options = array(
  "uri" => "http://ns.example.com",
  'location' => $insecure_url
);
$client = new SoapClient("something.wsdl", $soap_options);
