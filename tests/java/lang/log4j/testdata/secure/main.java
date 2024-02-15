import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class Foo {
  private static final Logger LOGGER = LogManager.getLogger(Foo.class);

  public static void bad2() {
    LOGGER.info("ok");
  }
}