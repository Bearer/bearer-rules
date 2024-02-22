<?php

# bearer:expected php_lang_ui_redress
header("X-Frame-Options: {$_GET['oops']}", true);
# bearer:expected php_lang_ui_redress
header("Content-Security-Policy: {$_GET['oops']}", true);
