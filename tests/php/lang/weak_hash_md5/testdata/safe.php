<?php

$encrypted = md5($user->uuid);
$encrypted = hash('md5', $user->uuid);
$algorithm = "md5";
$encrypted = hash($algorithm, $user->uuid);

?>