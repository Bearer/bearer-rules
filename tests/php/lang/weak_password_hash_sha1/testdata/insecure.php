<?php

# bearer:expected php_lang_weak_password_hash_sha1
$encrypted_password = sha1($user->password);
# bearer:expected php_lang_weak_password_hash_sha1
$encrypted_password = hash('sha1', $user->password);
$algorithm = 'sha1';
# bearer:expected php_lang_weak_password_hash_sha1
$encrypted_password = hash($algorithm, $user->password);
# bearer:expected php_lang_weak_password_hash_sha1
$encrypted_password = hash_hmac($algorithm, $user->password, $key);

$context = hash_init("sha1", 0);
# bearer:expected php_lang_weak_password_hash_sha1
hash_update($context, $user->password);

?>
