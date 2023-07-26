public Cipher getRSACipher() {
  Cipher cipher = javax.crypto.Cipher.getInstance("RSA/ECB/OAEPWithMD5AndMGF1Padding");

  // Some exception handling ...

  return cipher;
}