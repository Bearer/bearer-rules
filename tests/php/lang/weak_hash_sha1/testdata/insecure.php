<?php

$encrypted = sha1($user->gender);
$encrypted = sha1($other);

$encrypted = hash('sha1', $user->gender);
$algorithm = "sha1";
$encrypted = hash($algorithm, $user->gender);
$encrypted = hash($algorithm, $other);

sha1_file("foo.txt");

?>
