<?php

header("X-Frame-Options: {$_GET['oops']}", true);
header("Content-Security-Policy: {$_GET['oops']}", true);
