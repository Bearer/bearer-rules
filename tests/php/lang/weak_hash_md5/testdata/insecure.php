<?php

$encrypted = md5($user->gender);
$encrypted = hash('md5', $user->gender);
$algorithm = "md5";
$encrypted = hash($algorithm, $user->gender);

?>