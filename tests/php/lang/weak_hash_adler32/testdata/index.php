<?php
$input = "something important";

$myhash1 = hash('sha256', $input);
// bearer:expected php_lang_weak_hash_adler32
$myhash3 = hash('adler32', $input);

$ctx = hash_init('adler32');
// bearer:expected php_lang_weak_hash_adler32
hash_update($ctx, $input);
$myhash4 = hash_final($hasher);
?>