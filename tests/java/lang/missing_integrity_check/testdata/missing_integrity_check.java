public byte[] encryptMe(String text) throws GeneralSecurityException
{
// bearer:expected java_lang_missing_integrity_check
  Cipher c = Cipher.getInstance("DES/CBC/PKCS5Padding");

  c.init(Cipher.ENCRYPT_MODE, keyPair.getPrivate());
  return c.doFinal(text);
}
