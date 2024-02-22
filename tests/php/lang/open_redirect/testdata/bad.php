<?php

# bearer:expected php_lang_open_redirect
header("Location: {$_GET['oops']}", true, 301);
# bearer:expected php_lang_open_redirect
header("Location: {$_SERVER['REQUEST_URI']}", true, 301);
