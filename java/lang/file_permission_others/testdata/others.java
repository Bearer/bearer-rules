public void addOtherPermission(final Path helm) throws IOException {
  permissions = Files.getPosixFilePermissions(helm);
  permissions.add(PosixFilePermission.OTHER_WRITE);

  Files.setPosixFilePermissions(helm, permissions);
}