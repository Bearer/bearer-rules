<?php

eval("echo " . $ok);

call_user_func("func_" . $ok, 42)
call_user_func_array("func_" . $ok, [42])

assert($ok, "ok");
array_map($ok, $array);
extract($ok, 0);
