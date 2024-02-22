public byte[] signToken(byte[] payload) throws GeneralSecurityException
{
  Properties p = getProperties();
  Cipher c = javax.crypto.Cipher.getInstance(p.getProperty("algo", "DES"));

  c.init(Cipher.ENCRYPT_MODE, keyPair.getPrivate());

// bearer:expected java_lang_weak_encryption_des
  return c.doFinal(payload);
}

public byte[] encryptName(User user) throws GeneralSecurityException
{
  Cipher c = Cipher.getInstance("DES/CBC/NoPadding", "foo");

// bearer:expected java_lang_weak_encryption_des
  c.init(Cipher.ENCRYPT_MODE, keyPair.getPrivate());
// bearer:expected java_lang_weak_encryption_des
  c.update(user.firstname)
  return c.doFinal(user.lastname);
}
