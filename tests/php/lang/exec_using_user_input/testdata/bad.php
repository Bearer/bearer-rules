<?php

shell_exec("cat " . $_GET["oops"]);

$output = null;
exec("cat " . $_GET["oops"], $output);

$result_code = null;
passthru("cat " . $_GET["oops"], $result_code);
system("cat " . $_GET["oops"], $result_code);

$f = popen("cat " . $_GET["oops"], "r");

proc_open(["cat", $_GET["oops"]], null);
proc_open("cat", cwd: $_GET["oops"], env_vars: []);
proc_open("cat", env_vars: $_GET["oops"]);

pcntl_exec("/bin/" . $_GET["oops"], [], null);
pcntl_exec("cat", [$_GET["oops"]], null);
pcntl_exec("cat", [$ok], $_GET["oops"]);
pcntl_exec($path, env_vars: $_GET["oops"]);
