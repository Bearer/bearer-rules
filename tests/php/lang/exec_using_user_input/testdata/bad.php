<?php

# bearer:expected php_lang_exec_using_user_input
shell_exec("cat " . $_GET["oops"]);

$output = null;
# bearer:expected php_lang_exec_using_user_input
exec("cat " . $_GET["oops"], $output);

$result_code = null;
# bearer:expected php_lang_exec_using_user_input
passthru("cat " . $_GET["oops"], $result_code);
# bearer:expected php_lang_exec_using_user_input
system("cat " . $_GET["oops"], $result_code);

# bearer:expected php_lang_exec_using_user_input
$f = popen("cat " . $_GET["oops"], "r");

# bearer:expected php_lang_exec_using_user_input
proc_open(["cat", $_GET["oops"]], null);
# bearer:expected php_lang_exec_using_user_input
proc_open("cat", cwd: $_GET["oops"], env_vars: []);
# bearer:expected php_lang_exec_using_user_input
proc_open("cat", env_vars: $_GET["oops"]);

# bearer:expected php_lang_exec_using_user_input
pcntl_exec("/bin/" . $_GET["oops"], [], null);
# bearer:expected php_lang_exec_using_user_input
pcntl_exec("cat", [$_GET["oops"]], null);
# bearer:expected php_lang_exec_using_user_input
pcntl_exec("cat", [$ok], $_GET["oops"]);
# bearer:expected php_lang_exec_using_user_input
pcntl_exec($path, env_vars: $_GET["oops"]);
