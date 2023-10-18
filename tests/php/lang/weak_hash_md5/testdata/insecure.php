<?php

$encrypted = md5($user->gender);
$encrypted = md5($other);

$encrypted = hash('md5', $user->gender);
$algorithm = "md5";
$encrypted = hash($algorithm, $user->gender);
$encrypted = hash($algorithm, $other);

md5_file("foo.txt");

?>
