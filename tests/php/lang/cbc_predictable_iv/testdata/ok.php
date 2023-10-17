<?php

<?php

$algorithm = "aes-256-cbc";

openssl_encrypt($data, $algorithm, $passphrase, 0, $ok, null);
openssl_encrypt($data, $algorithm, $passphrase, iv: $ok);

openssl_encrypt($data, "aes-256-ofb", $passphrase, 0, "ok", null);
openssl_encrypt($data, "aes-256-ofb", $passphrase, iv: "ok");
