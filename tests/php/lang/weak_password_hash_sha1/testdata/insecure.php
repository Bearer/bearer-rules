<?php

$encrypted_password = sha1($user->password);
$encrypted_password = hash('sha1', $user->password);
$algorithm = 'sha1';
$encrypted_password = hash($algorithm, $user->password);
$encrypted_password = hash_hmac($algorithm, $user->password, $key);

?>
