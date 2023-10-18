<?php

$encrypted = md5($user->gender);
$encrypted = md5($other);

$encrypted = hash('md5', $user->gender);
$encrypted = hash('md4', $user->gender);
$algorithm = "md5";
$encrypted = hash($algorithm, $user->gender);
$encrypted = hash($algorithm, $other);

md5_file("foo.txt");

hash_hmac("md5", $user->gender, $key);
hash_hmac("md4", $user->gender, $key);
hash_hmac("md5", $other, $key);

?>
