<?php

$insecure_url = "http://oops.example.com";

new SendGrid\Client($insecure_url, $authHeaders);
