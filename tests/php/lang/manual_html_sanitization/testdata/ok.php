<?php

$x = "foo & bar < 42";
$html = str_replace("&", "ok", $x);
$html = str_replace("<", "ok", $html);

$html2 = preg_replace("&", "ok", $x);
