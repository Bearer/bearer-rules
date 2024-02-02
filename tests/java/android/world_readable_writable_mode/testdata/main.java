// bearer:expected java_android_world_readable_writable_mode
if ((mode & MODE_WORLD_READABLE) != 0) {
    perms |= FileUtils.S_IROTH;
}

File sdDir = new File(Environment.getExternalStorageDirectory(), "mydir");
// bearer:expected java_android_world_readable_writable_mode
File filesysDir = getDir("mydir", Context.MODE_WORLD_READABLE);
File file = new File(sdDir, "myfile.txt");