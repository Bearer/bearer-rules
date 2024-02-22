<?php

# bearer:expected php_lang_cookies
setcookie("user_email", $user->email, 0);
# bearer:expected php_lang_cookies
setrawcookie("user_email", $user->email, 0);
