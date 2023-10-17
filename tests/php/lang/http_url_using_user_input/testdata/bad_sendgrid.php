<?php

$user_input = "http://{$_GET['host']}";

new SendGrid\Client($user_input, $authHeaders);
