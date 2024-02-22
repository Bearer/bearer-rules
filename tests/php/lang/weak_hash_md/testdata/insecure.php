<?php

# bearer:expected php_lang_weak_hash_md
$encrypted = md5($user->gender);
# bearer:expected php_lang_weak_hash_md
$encrypted = md5($other);

# bearer:expected php_lang_weak_hash_md
$encrypted = hash('md5', $user->gender);
# bearer:expected php_lang_weak_hash_md
$encrypted = hash('md4', $user->gender);

$algorithm = "md5";
# bearer:expected php_lang_weak_hash_md
$encrypted = hash($algorithm, $user->gender);
# bearer:expected php_lang_weak_hash_md
$encrypted = hash($algorithm, $other);

# bearer:expected php_lang_weak_hash_md
md5_file("foo.txt");
# bearer:expected php_lang_weak_hash_md
hash_hmac("md5", $user->gender, $key);
# bearer:expected php_lang_weak_hash_md
hash_hmac("md4", $user->gender, $key);
# bearer:expected php_lang_weak_hash_md
hash_hmac("md5", $other, $key);

$context = hash_init("md5", 0);
# bearer:expected php_lang_weak_hash_md
hash_update($context, $user->gender);
# bearer:expected php_lang_weak_hash_md
hash_update($context, $other);
# bearer:expected php_lang_weak_hash_md
hash_update_file($context, $filename);
# bearer:expected php_lang_weak_hash_md
hash_update_stream($context, $handle);

?>
