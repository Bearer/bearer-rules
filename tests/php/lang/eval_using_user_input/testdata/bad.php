<?php

# bearer:expected php_lang_eval_using_user_input
eval("echo " . $_GET["oops"]);

# bearer:expected php_lang_eval_using_user_input
call_user_func("func_" . $_POST["oops"], 42);
# bearer:expected php_lang_eval_using_user_input
call_user_func_array("func_" . $_POST["oops"], [42]);

# bearer:expected php_lang_eval_using_user_input
assert($_POST["oops"], "oops");
# bearer:expected php_lang_eval_using_user_input
array_map($_POST["oops"], $array);
# bearer:expected php_lang_eval_using_user_input
extract($_POST["oops"], 0);
