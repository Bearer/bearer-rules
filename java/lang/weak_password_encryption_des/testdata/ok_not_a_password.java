public byte[] signToken(byte[] payload) throws GeneralSecurityException
{
  Cipher c = javax.crypto.Cipher.getInstance("DES");

  c.init(Cipher.ENCRYPT_MODE, keyPair.getPrivate());

  return c.doFinal(payload);
}

public byte[] encryptName(User user) throws GeneralSecurityException
{
  Cipher c = Cipher.getInstance("DES/CBC/NoPadding");

  c.init(Cipher.ENCRYPT_MODE, keyPair.getPrivate());
  c.update(user.firstname)
  return c.doFinal(user.lastname);
}