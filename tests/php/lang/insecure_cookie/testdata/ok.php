<?php

setcookie("name", "value", 0, "", "", true, true, []);
setcookie("name", "value", ["httponly" => true, "secure" => true]);

setrawcookie("name", "value", 0, "", "", true, true, []);
setrawcookie("name", "value", ["httponly" => true, "secure" => true]);
