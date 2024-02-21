<?php

# bearer:expected php_lang_weak_hash_sha1
$encrypted = sha1($user->gender);
# bearer:expected php_lang_weak_hash_sha1
$encrypted = sha1($other);
# bearer:expected php_lang_weak_hash_sha1

$encrypted = hash('sha1', $user->gender);
# bearer:expected php_lang_weak_hash_sha1
$algorithm = "sha1";
$encrypted = hash($algorithm, $user->gender);
# bearer:expected php_lang_weak_hash_sha1
$encrypted = hash($algorithm, $other);

# bearer:expected php_lang_weak_hash_sha1
# bearer:expected php_lang_weak_hash_sha1
sha1_file("foo.txt");

hash_hmac("sha1", $user->gender, $key);
# bearer:expected php_lang_weak_hash_sha1
# bearer:expected php_lang_weak_hash_sha1
hash_hmac("sha1", $other, $key);

$context = hash_init("sha1", 0);
hash_update($context, $user->gender);
# bearer:expected php_lang_weak_hash_sha1
hash_update($context, $other);
# bearer:expected php_lang_weak_hash_sha1
hash_update_file($context, $filename);
# bearer:expected php_lang_weak_hash_sha1
hash_update_stream($context, $handle);

?>
