<?php

$oops = "/files/" . $_GET["oops"];

printf($oops, $ok);
sprintf($oops, $ok);
vprintf($oops, $ok);
vsprintf($oops, $ok);
fprintf($f, $oops, $ok);
fscanf($f, $oops, $ok);
sscanf($s, $oops, $ok);
vfprintf($f, $oops, $ok);
