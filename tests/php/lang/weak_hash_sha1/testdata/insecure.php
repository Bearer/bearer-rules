<?php

$encrypted = sha1($user->gender);
$encrypted = hash('sha1', $user->gender);
$algorithm = "sha1";
$encrypted = hash($algorithm, $user->gender);

?>