public void addOtherPermission(final Path helm) throws IOException {
  permissions = Files.getPosixFilePermissions(helm);
// bearer:expected java_lang_file_permission_others
  permissions.add(PosixFilePermission.OTHER_WRITE);

  Files.setPosixFilePermissions(helm, permissions);
}