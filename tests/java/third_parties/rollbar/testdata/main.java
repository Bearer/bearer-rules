// Use bearer:expected java_third_parties_rollbar to flag expected findings

import com.rollbar.notifier.Rollbar;
import com.rollbar.notifier.config.Config;
import com.rollbar.notifier.config.ConfigBuilder;

public class Foo {
  protected void bad(User user) {
    Config config = ConfigBuilder.withAccessToken("<post_server_item_access_token>")
        .environment("production")
        .codeVersion("1.0.0")
        .build();
    Rollbar rollbar = new Rollbar(config);
    // bearer:expected java_third_parties_rollbar
    rollbar.error(user.email);
    // bearer:expected java_third_parties_rollbar
    rollbar.info("This is an info message about " + user.name);
    // bearer:expected java_third_parties_rollbar
    rollbar.setPersonData(user.uuid,user.name,user.email);
    // bearer:expected java_third_parties_rollbar
    rollbar.debug("Here is some debug message for " + user.name);
  }

  public void good(User user) {
    Config config = ConfigBuilder.withAccessToken("<post_server_item_access_token>")
        .environment("production")
        .codeVersion("1.0.0")
        .build();
    Rollbar rollbar = new Rollbar(config);
    rollbar.error("Some error message");
    rollbar.info("This is an info message about " + user.uuid);
    rollbar.setPersonData(user.uuid);
    rollbar.debug("Here is some debug message for " + user.uuid);
  }
}