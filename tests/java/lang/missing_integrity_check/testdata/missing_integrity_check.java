import javax.crypto.Cipher;

class Foo {
  public byte[] encryptMe(String text) throws GeneralSecurityException
  {
    Cipher c = Cipher.getInstance("DES/CBC/PKCS5Padding");

    c.init(Cipher.ENCRYPT_MODE, keyPair.getPrivate());
    return c.doFinal(text);
  }

  public byte[] encryptMe2(String text) throws GeneralSecurityException
  {
    Cipher c = javax.crypto.Cipher.getInstance("DES/CBC/PKCS5Padding");

    c.init(Cipher.ENCRYPT_MODE, keyPair.getPrivate());
    return c.doFinal(text);
  }
}
