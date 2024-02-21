<?php

# bearer:expected php_lang_insecure_cookie
setcookie("name", "value");
# bearer:expected php_lang_insecure_cookie
setcookie("name", "value", 0, "", "", false, false, []);
# bearer:expected php_lang_insecure_cookie
setcookie("name", "value", 0, "", "", false, true, []);
# bearer:expected php_lang_insecure_cookie
setcookie("name", "value", httponly: true);
# bearer:expected php_lang_insecure_cookie
setcookie("name", "value", secure: false, httponly: false);
# bearer:expected php_lang_insecure_cookie
setcookie("name", "value", ["httponly" => false, "secure" => false]);
# bearer:expected php_lang_insecure_cookie
setcookie("name", "value", ["httponly" => true, "secure" => false]);
# bearer:expected php_lang_insecure_cookie
setcookie("name", "value", []);

# bearer:expected php_lang_insecure_cookie
setrawcookie("name", "value");
# bearer:expected php_lang_insecure_cookie
setrawcookie("name", "value", 0, "", "", false, false, []);
# bearer:expected php_lang_insecure_cookie
setrawcookie("name", "value", 0, "", "", false, true, []);
# bearer:expected php_lang_insecure_cookie
setrawcookie("name", "value", httponly: true);
# bearer:expected php_lang_insecure_cookie
setrawcookie("name", "value", secure: false, httponly: false);
# bearer:expected php_lang_insecure_cookie
setrawcookie("name", "value", ["httponly" => false, "secure" => false]);
# bearer:expected php_lang_insecure_cookie
setrawcookie("name", "value", ["httponly" => true, "secure" => false]);
# bearer:expected php_lang_insecure_cookie
setrawcookie("name", "value", []);
