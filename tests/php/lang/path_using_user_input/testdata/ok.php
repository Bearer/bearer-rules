<?php

// filesystem
chgrp($ok, 1);
chmod($ok, 0755);
chown($ok, 1);
copy($ok, $ok, null);
copy($ok, $ok);
disk_free_space($ok);
diskfreespace($ok);
disk_total_space($ok);
file($ok, 0);
file_exists($ok);
file_get_contents($ok, true);
file_put_contents($ok, $data);
fileatime($ok);
filectime($ok);
filegroup($ok);
fileinode($ok);
filemtime($ok);
fileowner($ok);
fileperms($ok);
filesize($ok);
filetype($ok);
fopen($ok, "r");
glob($ok . "/**", 0);
is_dir($ok);
is_executable($ok);
is_file($ok);
is_link($ok);
is_readable($ok);
is_uploaded_file($ok);
is_writable($ok);
is_writeable($ok);
lchgrp($ok, 1);
lchown($ok, 1);
link($ok, $ok);
link($ok, $ok);
linkinfo($ok);
lstat($ok);
mkdir($ok, 0777);
move_uploaded_file($ok, $ok);
parse_ini_file($ok, true);
pathinfo($ok, PATHINFO_DIRNAME);
readfile($ok, true);
readlink($ok);
rename($ok, $ok, null);
rename($ok, $ok, null);
rmdir($ok, null);
stat($ok);
symlink($ok, $ok);
symlink($ok, $ok);
tempnam($ok, $ok);
tempnam($ok, $ok);
touch($ok, time());
unlink($ok, null);

// directory
chdir($ok);
chroot($ok);
dir($ok, null);
opendir($ok, null);
scandir($ok, SCANDIR_SORT_ASCENDING);

// hash
hash_file($algo, $ok, false);
