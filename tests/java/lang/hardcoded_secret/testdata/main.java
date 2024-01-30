package password;
import java.util.Arrays;

public class ShareTheSecrets {
  // ok
  private static final byte[] PUBLIC_KEY = new byte[] { 1, 2, 3, 4, 5, 6, 7 };
  // bearer:expected java_lang_hardcoded_secret
  final String pass2 = "f#a};!y~7VBcu<&F@[%,{b";
  // bearer:expected java_lang_hardcoded_secret
  private static final byte[] API_KEY = new byte[] { 1, 2, 3, 4, 5, 6, 7 };
  // bearer:expected java_lang_hardcoded_secret
  private static final String PWD = "hV#;N.F9j}'v5Y-XJc])P*";
  // bearer:expected java_lang_hardcoded_secret
  private static final char[] password = { 's', 'e', 'c', 'r', 'e', 't', '5' };
  // bearer:expected java_lang_hardcoded_secret
  public static final String API_KEY = ".uYikE-os3cM23rz.i6Q";

  public static void bad() throws Exception {
    // bearer:expected java_lang_hardcoded_secret
    final String pass2 = "f#a};!y~7VBcu<&F@[%,{b";
    // bearer:expected java_lang_hardcoded_secret
    char[] ciphertext = "gSbDu-wAE7ZL#[tG4'jfx><HFdVk;5a".toCharArray();
    // bearer:expected java_lang_hardcoded_secret
    char[] secret = { 's', 'e', 'c', 'r', 'e', 't' };
  }

  public void alsoBad() throws Exception {
    // bearer:expected java_lang_hardcoded_secret
    char[] pwd1 = PWD.toCharArray();
    // bearer:expected java_lang_hardcoded_secret
    public char[] apiKey = {"s", "e", "c", "r", "e", "t"};
    // bearer:expected java_lang_hardcoded_secret
    char[] pwd = ".uYikE-os3cM23rz.i6Q".toCharArray();
  }

  public void good() throws Exception {
    // test-like data
    char[] apiKey = "my-secret-key";
    final String API_KEY = "Enter API";
    final String pwd = "testing";

    // null data
    public String password = null;
    char[] apiKey =
  }
}
