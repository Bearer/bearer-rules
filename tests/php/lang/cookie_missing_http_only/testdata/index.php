<?php

// bearer:expected php_lang_cookie_missing_http_only
setcookie("name", "value");
// bearer:expected php_lang_cookie_missing_http_only
setcookie("name", "value", 0, "", "", false, false, []);
// bearer:expected php_lang_cookie_missing_http_only
setcookie("name", "value", 0, "", "", true, false, []);
// bearer:expected php_lang_cookie_missing_http_only
setcookie("name", "value", secure: true);
// bearer:expected php_lang_cookie_missing_http_only
setcookie("name", "value", secure: false, httponly: false);
// bearer:expected php_lang_cookie_missing_http_only
setcookie("name", "value", ["httponly" => false, "secure" => false]);
// bearer:expected php_lang_cookie_missing_http_only
setcookie("name", "value", ["httponly" => false, "secure" => true]);
// bearer:expected php_lang_cookie_missing_http_only
setcookie("name", "value", []);

// bearer:expected php_lang_cookie_missing_http_only
setrawcookie("name", "value");
// bearer:expected php_lang_cookie_missing_http_only
setrawcookie("name", "value", 0, "", "", false, false, []);
// bearer:expected php_lang_cookie_missing_http_only
setrawcookie("name", "value", 0, "", "", true, false, []);
// bearer:expected php_lang_cookie_missing_http_only
setrawcookie("name", "value", secure: true);
// bearer:expected php_lang_cookie_missing_http_only
setrawcookie("name", "value", secure: false, httponly: false);
// bearer:expected php_lang_cookie_missing_http_only
setrawcookie("name", "value", ["httponly" => false, "secure" => false]);
// bearer:expected php_lang_cookie_missing_http_only
setrawcookie("name", "value", ["httponly" => false, "secure" => true]);
// bearer:expected php_lang_cookie_missing_http_only
setrawcookie("name", "value", []);

// ok
setcookie("name", "value", 0, "", "", false, true, []);
setcookie("name", "value", httponly: true);
setrawcookie("name", "value", 0, "", "", false, true, []);
setrawcookie("name", "value", ["httponly" => true, "secure" => false]);
setrawcookie("name", "value", httponly: true);