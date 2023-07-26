public byte[] signToken(byte[] payload) throws GeneralSecurityException
{
  Properties p = getProperties();
  Cipher c = javax.crypto.Cipher.getInstance(p.getProperty("algo", "DES"));

  c.init(Cipher.ENCRYPT_MODE, keyPair.getPrivate());

  return c.doFinal(payload);
}

public byte[] encryptName(User user) throws GeneralSecurityException
{
  Cipher c = Cipher.getInstance("DES/CBC/NoPadding", "foo");

  c.init(Cipher.ENCRYPT_MODE, keyPair.getPrivate());
  c.update(user.firstname)
  return c.doFinal(user.lastname);
}
