<?php
$input = "something important";

$myhash1 = hash('sha256', $input);
// bearer:expected php_lang_weak_hash_crc32
$myhash2 = hash('crc32b', $input);
// bearer:expected php_lang_weak_hash_crc32
$myhash3 = hash('crc32c', $input);
// bearer:expected php_lang_weak_hash_crc32
$myhash4 = crc32($input);

?>