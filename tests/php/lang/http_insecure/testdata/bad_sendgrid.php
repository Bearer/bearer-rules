<?php

$insecure_url = "http://oops.example.com";

# bearer:expected php_lang_http_insecure
new SendGrid\Client($insecure_url, $authHeaders);
