<?php

# bearer:expected php_lang_deserialization_of_user_input
$data = unserialize($_GET["oops"], ["max_depth" => 10]);
