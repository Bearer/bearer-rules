<?php

$encrypted = md5($user->userId);
$encrypted = hash('md5', $user->userId);
$algorithm = "md5";
$encrypted = hash($algorithm, $user->userId);

?>
