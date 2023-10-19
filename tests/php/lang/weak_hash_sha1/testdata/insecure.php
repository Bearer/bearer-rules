<?php

$encrypted = sha1($user->gender);
$encrypted = sha1($other);

$encrypted = hash('sha1', $user->gender);
$algorithm = "sha1";
$encrypted = hash($algorithm, $user->gender);
$encrypted = hash($algorithm, $other);

sha1_file("foo.txt");

hash_hmac("sha1", $user->gender, $key);
hash_hmac("sha1", $other, $key);

$context = hash_init("sha1", 0);
hash_update($context, $user->gender);
hash_update($context, $other);
hash_update_file($context, $filename);
hash_update_stream($context, $handle);

?>
