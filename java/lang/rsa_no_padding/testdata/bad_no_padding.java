public Cipher getRSACipher() {
  Cipher cipher = javax.crypto.Cipher.getInstance("RSA/NONE/NoPadding");

  // Some exception handling ...

  return cipher;
}