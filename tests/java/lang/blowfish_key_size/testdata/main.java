package crypto;

import javax.crypto.KeyGenerator;
import java.security.NoSuchAlgorithmException;

public class Foo {
  public void bad() throws NoSuchAlgorithmException {
      KeyGenerator keyGen = KeyGenerator.getInstance("Blowfish");
      // bearer:expected java_lang_blowfish_key_size
      keyGen.init(64);
  }

  public void good() throws NoSuchAlgorithmException {
      KeyGenerator keyGen = KeyGenerator.getInstance("Blowfish");
      // ok no expectation
      keyGen.init(256);
  }
}