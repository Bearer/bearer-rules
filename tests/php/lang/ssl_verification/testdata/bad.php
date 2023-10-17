<?php

curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);

$context = stream_context_create([
  "ssl" => [
    "other" => false,
    "verify_peer" => false
  ],
  "other" => 1
], []);

$context2 = stream_context_create([
  "ssl" => [
    "other" => false,
    "verify_peer_name" => false
  ],
  "other" => 1
], []);
