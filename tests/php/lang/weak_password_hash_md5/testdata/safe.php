<?php

$file_name = $_GET['name'];
$encrypted_password = password_hash($user->password);
$encrypted_password2 = md5($file_name);

?>