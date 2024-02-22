<?php

$insecure_url = "http://oops.example.com";

# bearer:expected php_lang_http_insecure
$curl = curl_init($insecure_url);
# bearer:expected php_lang_http_insecure
curl_setopt($curl, CURLOPT_URL, $insecure_url);

# bearer:expected php_lang_http_insecure
file_get_contents($insecure_url, true);
# bearer:expected php_lang_http_insecure
fopen($insecure_url, "r");

# bearer:expected php_lang_http_insecure
$request = new http\Client\Request("GET", $insecure_url, ["User-Agent"=>"My Client/0.1"]);

$soap_options = array(
  "uri" => "http://ns.example.com",
  'location' => $insecure_url
);
# bearer:expected php_lang_http_insecure
$client = new SoapClient("something.wsdl", $soap_options);
