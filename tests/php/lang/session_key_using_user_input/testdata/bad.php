<?php

$userInput = "thing_" . $_GET["oops"];

# bearer:expected php_lang_session_key_using_user_input
call($_SESSION[$userInput]);
