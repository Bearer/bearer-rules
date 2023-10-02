<?php

use Http\Message\Authentication\QueryParam;

$authentication = new QueryParam([
  'user' => $user->email,
]);
