// Use bearer:expected java_third_parties_sentry to flag expected findings

import io.sentry.IHub;
import io.sentry.Hub;
import io.sentry.Sentry;
import io.sentry.SentryEvent;
import io.sentry.protocol.Message;
import io.sentry.protocol.User;

public class Foo {
  public void bad(User user) {
    try {
      // ...
    } catch (Exception e) {
      Sentry.captureException(e);
    }
  }

  public void bad2(User user) {
    // bearer:expected java_third_parties_sentry
    Sentry.addBreadcrumb("Action from user " + user.email);

    // bearer:expected java_third_parties_sentry
    Sentry.captureMessage("username", user.name);

    // bearer:expected java_third_parties_sentry
    Sentry.setExtra("username", user.name);
    // bearer:expected java_third_parties_sentry
    Sentry.setTag("username", user.name);

    User user = new User();
    // bearer:expected java_third_parties_sentry
    user.setEmail(user.email);
    Sentry.setUser(user);
  }

  public void bad3(User user) {
    Hub hub = new Hub(options);

    // bearer:expected java_third_parties_sentry
    hub.addBreadcrumb("Action from user " + user.email);

    // bearer:expected java_third_parties_sentry
    hub.captureMessage("username", user.name);

    User user = new User();
    // bearer:expected java_third_parties_sentry
    user.setEmail(user.email);
    hub.setUser(user);
  }

  public void bad4(User user) {
    try {
      // ...
    } catch (Exception e) {
      SentryEvent event = new SentryEvent();
      Message message = new Message();

      // bearer:expected java_third_parties_sentry
      message.setMessage("Error for " + user.email);
      event.setMessage(message);

      Sentry.captureEvent(event);
    }
  }

  public void bad5(User user) {
    Sentry.configureScope(scope -> {
      // bearer:expected java_third_parties_sentry
      scope.setExtra("additional", user.email);
      // bearer:expected java_third_parties_sentry
      scope.setTag("user", user.email);
    });
  }
}