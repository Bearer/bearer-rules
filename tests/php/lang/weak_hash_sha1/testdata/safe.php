<?php

$encrypted = sha1($user->uuid);
$encrypted = hash('sha1', $user->uuid);
$algorithm = 'sha1';
$encrypted = hash($algorithm, $user->uuid);

?>