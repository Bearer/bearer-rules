<?php

header("Location: $ok", true, 301);
header("Location: /foo", true, 301);
header("Location: {$_SERVER['OTHER']}", true, 301);
