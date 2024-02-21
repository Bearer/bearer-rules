<?php

$user_input = "http://{$_GET['host']}";

# bearer:expected php_lang_http_url_using_user_input
$curl = curl_init($user_input);
# bearer:expected php_lang_http_url_using_user_input
curl_setopt($curl, CURLOPT_URL, $user_input);

# bearer:expected php_lang_http_url_using_user_input
file_get_contents($user_input, true);
# bearer:expected php_lang_http_url_using_user_input
fopen($user_input, "r");

# bearer:expected php_lang_http_url_using_user_input
$request = new http\Client\Request("GET", $user_input, ["User-Agent"=>"My Client/0.1"]);

$soap_options = array(
  "uri" => "http://ns.example.com",
  'location' => $user_input
);
# bearer:expected php_lang_http_url_using_user_input
$client = new SoapClient("something.wsdl", $soap_options);
