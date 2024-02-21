<?php

$x = "foo & bar < 42";
# bearer:expected php_lang_manual_html_sanitization
$html = str_replace("&", "&amp;", $x);
# bearer:expected php_lang_manual_html_sanitization
$html = str_replace("<", "&lt;", $html);

# bearer:expected php_lang_manual_html_sanitization
$html2 = preg_replace("&", "&amp;", $x);
