<?php

$oops = "/files/" . $_GET["oops"];

// filesystem
chgrp($oops, 1);
chmod($oops, 0755);
chown($oops, 1);
copy($oops, $ok, null);
copy($ok, $oops);
disk_free_space($oops);
diskfreespace($oops);
disk_total_space($oops);
file($oops, 0);
file_exists($oops);
file_get_contents($oops, true);
file_put_contents($oops, $data);
fileatime($oops);
filectime($oops);
filegroup($oops);
fileinode($oops);
filemtime($oops);
fileowner($oops);
fileperms($oops);
filesize($oops);
filetype($oops);
fopen($oops, "r");
glob($oops . "/**", 0);
is_dir($oops);
is_executable($oops);
is_file($oops);
is_link($oops);
is_readable($oops);
is_uploaded_file($oops);
is_writable($oops);
is_writeable($oops);
lchgrp($oops, 1);
lchown($oops, 1);
link($oops, $ok);
link($ok, $oops);
linkinfo($oops);
lstat($oops);
mkdir($oops, 0777);
move_uploaded_file($ok, $oops);
parse_ini_file($oops, true);
pathinfo($oops, PATHINFO_DIRNAME);
readfile($oops, true);
readlink($oops);
rename($oops, $ok, null);
rename($ok, $oops, null);
rmdir($oops, null);
stat($oops);
symlink($oops, $ok);
symlink($ok, $oops);
tempnam($oops, $ok);
tempnam($ok, $oops);
touch($oops, time());
unlink($oops, null);

// directory
chdir($oops);
chroot($oops);
dir($oops, null);
opendir($oops, null);
scandir($oops, SCANDIR_SORT_ASCENDING);

// hash
hash_file($algo, $oops, false);

// sanitizer
$dirname1 = $oops['dirname'];
$dirname2 = dirname($oops);
unlink("/oops/$dirname1", null);
unlink("/oops/$dirname2", null);
