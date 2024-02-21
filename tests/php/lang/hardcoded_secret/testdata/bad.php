<?php

# bearer:expected php_lang_hardcoded_secret
$password = ".uYikE-os3cM23rz.i6Q";

# bearer:expected php_lang_hardcoded_secret
const API_KEY = ".uYikE-os3cM23rz.i6Q";

# bearer:expected php_lang_hardcoded_secret
foo([ "secret" => ".uYikE-os3cM23rz.i6Q", "other" => 42]);

$name = ".uYikE-os3cM23rz.i6Q";
define($name, ".uYikE-os3cM23rz.i6Q");

# bearer:expected php_lang_hardcoded_secret
f(api_key: ".uYikE-os3cM23rz.i6Q");
# bearer:expected php_lang_hardcoded_secret
C::f(api_key: ".uYikE-os3cM23rz.i6Q");
# bearer:expected php_lang_hardcoded_secret
$x->f(api_key: ".uYikE-os3cM23rz.i6Q");
