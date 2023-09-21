<?php

`cat ${ok}`;

shell_exec("cat " . $ok);

$output = null;
exec("cat " . $ok, $output);

$result_code = null;
passthru("cat " . $ok, $result_code);
system("cat " . $ok, $result_code);

$f = popen("cat " . $ok, "r");

proc_open(["cat", $ok], null);

pcntl_exec("/bin/" . $ok, [], null);
pcntl_exec("cat", [$ok], null);
pcntl_exec("cat", [$ok], $ok);
