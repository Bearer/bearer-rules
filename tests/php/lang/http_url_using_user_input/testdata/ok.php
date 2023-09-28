<?php

$secure_url = "https://ok.example.com";

$curl = curl_init($secure_url);
curl_setopt($curl, CURLOPT_URL, $secure_url);

file_get_contents($secure_url, true);
fopen($secure_url, "r");

$request = new http\Client\Request("GET", $secure_url, ["User-Agent"=>"My Client/0.1"]);

$soap_options = array(
  "uri" => "http://ns.example.com",
  'location' => $secure_url
);
$client = new SoapClient("something.wsdl", $soap_options);
