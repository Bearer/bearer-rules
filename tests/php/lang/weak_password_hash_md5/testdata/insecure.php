<?php

$encrypted_password = md5($user->password);
$encrypted_password = hash('md5', $user->password);
$algorithm = "md5";
$encrypted_password = hash($algorithm, $user->password);

?>