<?php

$x = "foo & bar < 42";
$html = str_replace("&", "&amp;", $x);
$html = str_replace("<", "&lt;", $html);

$html2 = preg_replace("&", "&amp;", $x);
