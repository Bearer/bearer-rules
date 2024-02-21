<?php

$oops = "/files/" . $_GET["oops"];

# bearer:expected php_lang_format_string_using_user_input
printf($oops, $ok);
# bearer:expected php_lang_format_string_using_user_input
sprintf($oops, $ok);
# bearer:expected php_lang_format_string_using_user_input
vprintf($oops, $ok);
# bearer:expected php_lang_format_string_using_user_input
vsprintf($oops, $ok);
# bearer:expected php_lang_format_string_using_user_input
fprintf($f, $oops, $ok);
# bearer:expected php_lang_format_string_using_user_input
fscanf($f, $oops, $ok);
# bearer:expected php_lang_format_string_using_user_input
sscanf($s, $oops, $ok);
# bearer:expected php_lang_format_string_using_user_input
vfprintf($f, $oops, $ok);
