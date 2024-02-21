<?php

$oops = "/files/" . $_GET["oops"];

// filesystem
# bearer:expected php_lang_path_using_user_input
chgrp($oops, 1);
# bearer:expected php_lang_path_using_user_input
chmod($oops, 0755);
# bearer:expected php_lang_path_using_user_input
chown($oops, 1);
# bearer:expected php_lang_path_using_user_input
copy($oops, $ok, null);
# bearer:expected php_lang_path_using_user_input
copy($ok, $oops);
# bearer:expected php_lang_path_using_user_input
disk_free_space($oops);
# bearer:expected php_lang_path_using_user_input
diskfreespace($oops);
# bearer:expected php_lang_path_using_user_input
disk_total_space($oops);
# bearer:expected php_lang_path_using_user_input
file($oops, 0);
# bearer:expected php_lang_path_using_user_input
file_exists($oops);
# bearer:expected php_lang_path_using_user_input
file_get_contents($oops, true);
# bearer:expected php_lang_path_using_user_input
file_put_contents($oops, $data);
# bearer:expected php_lang_path_using_user_input
fileatime($oops);
# bearer:expected php_lang_path_using_user_input
filectime($oops);
# bearer:expected php_lang_path_using_user_input
filegroup($oops);
# bearer:expected php_lang_path_using_user_input
fileinode($oops);
# bearer:expected php_lang_path_using_user_input
filemtime($oops);
# bearer:expected php_lang_path_using_user_input
fileowner($oops);
# bearer:expected php_lang_path_using_user_input
fileperms($oops);
# bearer:expected php_lang_path_using_user_input
filesize($oops);
# bearer:expected php_lang_path_using_user_input
filetype($oops);
# bearer:expected php_lang_path_using_user_input
fopen($oops, "r");
glob($oops . "/**", 0);
# bearer:expected php_lang_path_using_user_input
is_dir($oops);
# bearer:expected php_lang_path_using_user_input
is_executable($oops);
# bearer:expected php_lang_path_using_user_input
is_file($oops);
# bearer:expected php_lang_path_using_user_input
is_link($oops);
# bearer:expected php_lang_path_using_user_input
is_readable($oops);
# bearer:expected php_lang_path_using_user_input
is_uploaded_file($oops);
# bearer:expected php_lang_path_using_user_input
is_writable($oops);
# bearer:expected php_lang_path_using_user_input
is_writeable($oops);
# bearer:expected php_lang_path_using_user_input
lchgrp($oops, 1);
# bearer:expected php_lang_path_using_user_input
lchown($oops, 1);
# bearer:expected php_lang_path_using_user_input
link($oops, $ok);
# bearer:expected php_lang_path_using_user_input
link($ok, $oops);
# bearer:expected php_lang_path_using_user_input
linkinfo($oops);
# bearer:expected php_lang_path_using_user_input
lstat($oops);
# bearer:expected php_lang_path_using_user_input
mkdir($oops, 0777);
# bearer:expected php_lang_path_using_user_input
move_uploaded_file($ok, $oops);
# bearer:expected php_lang_path_using_user_input
parse_ini_file($oops, true);
# bearer:expected php_lang_path_using_user_input
pathinfo($oops, PATHINFO_DIRNAME);
# bearer:expected php_lang_path_using_user_input
readfile($oops, true);
# bearer:expected php_lang_path_using_user_input
readlink($oops);
# bearer:expected php_lang_path_using_user_input
rename($oops, $ok, null);
# bearer:expected php_lang_path_using_user_input
rename($ok, $oops, null);
# bearer:expected php_lang_path_using_user_input
rmdir($oops, null);
# bearer:expected php_lang_path_using_user_input
stat($oops);
# bearer:expected php_lang_path_using_user_input
symlink($oops, $ok);
# bearer:expected php_lang_path_using_user_input
symlink($ok, $oops);
# bearer:expected php_lang_path_using_user_input
tempnam($oops, $ok);
# bearer:expected php_lang_path_using_user_input
tempnam($ok, $oops);
# bearer:expected php_lang_path_using_user_input
touch($oops, time());
# bearer:expected php_lang_path_using_user_input
unlink($oops, null);

// directory
# bearer:expected php_lang_path_using_user_input
chdir($oops);
# bearer:expected php_lang_path_using_user_input
chroot($oops);
# bearer:expected php_lang_path_using_user_input
dir($oops, null);
# bearer:expected php_lang_path_using_user_input
opendir($oops, null);
# bearer:expected php_lang_path_using_user_input
scandir($oops, SCANDIR_SORT_ASCENDING);

// hash
# bearer:expected php_lang_path_using_user_input
hash_file($algo, $oops, false);

// sanitizer
$dirname1 = $oops['dirname'];
$dirname2 = dirname($oops);
# bearer:expected php_lang_path_using_user_input
unlink("/oops/$dirname1", null);
# bearer:expected php_lang_path_using_user_input
unlink("/oops/$dirname2", null);
