<?php

$algorithm = "aes-256-cbc";

# bearer:expected php_lang_cbc_predictable_iv
openssl_encrypt($data, $algorithm, $passphrase, 0, "oops", null);
# bearer:expected php_lang_cbc_predictable_iv
openssl_encrypt($data, $algorithm, $passphrase, iv: "oops");
