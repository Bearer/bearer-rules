<?php

# bearer:expected php_lang_insecure_allow_origin
header("Access-Control-Allow-Origin: {$_GET['oops']}", true);
