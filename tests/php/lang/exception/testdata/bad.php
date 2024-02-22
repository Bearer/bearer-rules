<?php

# bearer:expected php_lang_exception
throw new Exception("error occurred for {$user->email}");

# bearer:expected php_lang_exception
die("error occurred for {$user->email}");
# bearer:expected php_lang_exception
exit("error occurred for {$user->email}");
