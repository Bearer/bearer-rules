<?php

$encrypted = sha1($user->userId);
$encrypted = hash('sha1', $user->userId);
$algorithm = 'sha1';
$encrypted = hash($algorithm, $user->userId);

?>
