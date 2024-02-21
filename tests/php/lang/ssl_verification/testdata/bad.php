<?php

# bearer:expected php_lang_ssl_verification
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
# bearer:expected php_lang_ssl_verification
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);

# bearer:expected php_lang_ssl_verification
$context = stream_context_create([
  "ssl" => [
    "other" => false,
    "verify_peer" => false
  ],
  "other" => 1
], []);

# bearer:expected php_lang_ssl_verification
$context2 = stream_context_create([
  "ssl" => [
    "other" => false,
    "verify_peer_name" => false
  ],
  "other" => 1
], []);
