<?php

header("Location: {$_GET['oops']}", true, 301);
header("Location: {$_SERVER['REQUEST_URI']}", true, 301);
