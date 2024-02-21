<?php

# bearer:expected php_lang_weak_password_hash_md
$encrypted_password = md5($user->password);
# bearer:expected php_lang_weak_password_hash_md
$encrypted_password = hash('md5', $user->password);
# bearer:expected php_lang_weak_password_hash_md
$encrypted_password = hash('md4', $user->password);
$algorithm = "md5";
# bearer:expected php_lang_weak_password_hash_md
$encrypted_password = hash($algorithm, $user->password);
# bearer:expected php_lang_weak_password_hash_md
$encrypted_password = hash_hmac($algorithm, $user->password, $key);
# bearer:expected php_lang_weak_password_hash_md
$encrypted_password = hash_hmac("md4", $user->password, $key);

$context = hash_init("md5", 0);
# bearer:expected php_lang_weak_password_hash_md
hash_update($context, $user->password);

?>
