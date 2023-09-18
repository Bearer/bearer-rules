<?php

eval("echo " . $_GET["oops"]);

call_user_func("func_" . $_POST["oops"], 42)
call_user_func_array("func_" . $_POST["oops"], [42])
