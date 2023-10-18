<?php

$encrypted = md5($user->userId);
$encrypted = hash('md5', $user->userId);
$encrypted = hash('md4', $user->userId);
$algorithm = "md5";
$encrypted = hash($algorithm, $user->userId);
hash_hmac("md5", $user->userId, $key);
hash_hmac("md4", $user->userId, $key);

$context = hash_init("md5", 0);
hash_update($context, $user->userId);

?>
