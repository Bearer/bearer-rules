public byte[] encryptName(User user) throws GeneralSecurityException
{
  Cipher c = Cipher.getInstance("DES/CBC/NoPadding");

  c.init(Cipher.ENCRYPT_MODE, keyPair.getPrivate());
  c.update(user.firstname)
  return c.doFinal(user.password);
}