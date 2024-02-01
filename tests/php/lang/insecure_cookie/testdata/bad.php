<?php

setcookie("name", "value");
setcookie("name", "value", 0, "", "", false, false, []);
setcookie("name", "value", 0, "", "", false, true, []);
setcookie("name", "value", httponly: true);
setcookie("name", "value", secure: false, httponly: false);
setcookie("name", "value", ["httponly" => false, "secure" => false]);
setcookie("name", "value", ["httponly" => true, "secure" => false]);
setcookie("name", "value", []);

setrawcookie("name", "value");
setrawcookie("name", "value", 0, "", "", false, false, []);
setrawcookie("name", "value", 0, "", "", false, true, []);
setrawcookie("name", "value", httponly: true);
setrawcookie("name", "value", secure: false, httponly: false);
setrawcookie("name", "value", ["httponly" => false, "secure" => false]);
setrawcookie("name", "value", ["httponly" => true, "secure" => false]);
setrawcookie("name", "value", []);
