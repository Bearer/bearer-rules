<?php

curl_setopt($curl, CURLOPT_SSL_OTHER, false);
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, true);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, true);

$context = stream_context_create([
  "ssl" => [
    "other" => false,
    "verify_peer" => true,
    "verify_peer_name" => true
  ],
  "other" => 1
], []);

$context2 = stream_context_create([
  "ssl" => [
    "other" => false,
  ],
  "other" => 1
], []);
