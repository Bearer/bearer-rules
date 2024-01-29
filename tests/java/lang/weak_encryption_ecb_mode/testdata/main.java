// Use bearer:expected <rule_name> to flag expected findings

public byte[] signToken(byte[] payload) throws GeneralSecurityException
{
  Properties p = getProperties();
  // bearer:expected java_lang_weak_encryption_ecb_mode
  Cipher c = javax.crypto.Cipher.getInstance("AES/ECB");
  c.init(Cipher.ENCRYPT_MODE, keyPair.getPrivate());

  return c.doFinal(payload);
}

public byte[] encryptName(User user) throws GeneralSecurityException
{
  // bearer:expected java_lang_weak_encryption_ecb_mode
  Cipher c = Cipher.getInstance("DES/ECB/NoPadding", "foo");

  c.init(Cipher.ENCRYPT_MODE, keyPair.getPrivate());
  c.update(user.firstname)
  return c.doFinal(user.lastname);
}

public byte[] ok(User user) throws GeneralSecurityException
{
  Cipher c = Cipher.getInstance("ChaCha20-Poly1305/None/NoPadding");

  c.init(Cipher.ENCRYPT_MODE, keyPair.getPrivate());
  c.update(user.firstname)
  return c.doFinal(user.lastname);
}
