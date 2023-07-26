public byte[] encryptMe(String text) throws GeneralSecurityException
{
  Cipher c = Cipher.getInstance("DES/GCM/PKCS5Padding");

  c.init(Cipher.ENCRYPT_MODE, keyPair.getPrivate());
  return c.doFinal(text);
}

public byte[] encryptMeAgain(String text) throws GeneralSecurityException
{
  Cipher c = Cipher.getInstance("RSA/CBC/PKCS5Padding");

  c.init(Cipher.ENCRYPT_MODE, keyPair.getPrivate());
  return c.doFinal(text);
}