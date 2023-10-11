<?php

$algorithm = "aes-256-cbc";

openssl_encrypt($data, $algorithm, $passphrase, 0, "oops", null);
openssl_encrypt($data, $algorithm, $passphrase, iv: "oops");
