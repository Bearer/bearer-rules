<?php

$user = new User();
$name = $user->name;
$uuid = $user->uuid;
error_log($uuid);