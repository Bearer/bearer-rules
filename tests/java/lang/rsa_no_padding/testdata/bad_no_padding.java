public Cipher getRSACipher() {
// bearer:expected java_lang_rsa_no_padding
  Cipher cipher = javax.crypto.Cipher.getInstance("RSA/NONE/NoPadding");

  // Some exception handling ...

  return cipher;
}