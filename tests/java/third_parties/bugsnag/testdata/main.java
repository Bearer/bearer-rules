// Use bearer:expected java_third_parties_bugsnag to flag expected findings

import com.bugsnag.Bugsnag;
import com.bugsnag.Report;
import com.bugsnag.callbacks.Callback;

public class Foosnag {
  public void bad(User user) {
    Bugsnag bugsnag = new Bugsnag("SECRET-API-KEY");

    bugsnag.addCallback(new Callback() {
      @Override
      public void beforeNotify(Report report) {
        report.addToTab("diagnostics", "timestamp", new Date());
        // bearer:expected java_third_parties_bugsnag
        report.addToTab("customer", "email", user.email);
      }
    });
  }

    public void bad2(User user) {
    Bugsnag bugsnag = new Bugsnag("SECRET-API-KEY");

    bugsnag.addCallback(new Callback() {
      @Override
      public void beforeNotify(Report report) {
        report.addToTab("diagnostics", "timestamp", new Date());
        // bearer:expected java_third_parties_bugsnag
        report.setUser(user.uuid, user.name, user.email);
      }
    });
  }

    public void bad3(User user) {
    Bugsnag bugsnag = new Bugsnag("SECRET-API-KEY");

    bugsnag.addCallback(new Callback() {
      @Override
      public void beforeNotify(Report report) {
        report.addToTab("diagnostics", "timestamp", new Date());
        // bearer:expected java_third_parties_bugsnag
        report.setUserEmail(user.email);
        report.setUserId(user.uuid);
      }
    });
  }

  public void bad4(User user) {
    Bugsnag bugsnag = new Bugsnag("SECRET-API-KEY");

    try {
      // ...
    } catch (RuntimeException exception) {
      bugsnag.notify(exception, new Callback() {
        @Override
        public void beforeNotify(Report report) {
          // bearer:expected java_third_parties_bugsnag
          report.addToTab("troubleUser", "email", user.email);
        }
      });
    }
  }

  public void bad5(User user) {
    Bugsnag bugsnag = new Bugsnag("SECRET-API-KEY");

    try {
      // ...
    } catch (RuntimeException exception) {
      bugsnag.notify(exception, (report) -> {
        // bearer:expected java_third_parties_bugsnag
        report.addToTab("customer", "name", user.name);
        // bearer:expected java_third_parties_bugsnag
        report.setUserEmail(user.email);
      });
    }
  }

  public void good() {
    Bugsnag bugsnag = new Bugsnag("SECRET-API-KEY");

    try {
      // ...
    } catch (RuntimeException exception) {
      bugsnag.notify(exception, (report) -> {
        report.setUserId(user.id);
      });
    }
  }

  public void good2() {
    Bugsnag bugsnag = new Bugsnag("SECRET-API-KEY");

    bugsnag.addCallback(new Callback() {
      @Override
      public void beforeNotify(Report report) {
        report.addToTab("diagnostics", "timestamp", new Date());
        report.setUserId(user.uuid);
      }
    });
  }
}