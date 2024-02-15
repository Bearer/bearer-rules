// Use bearer:expected java_third_parties_new_relic to flag expected findings
import com.newrelic.api.agent.NewRelic;

public class FooBar {
  public void bad(User user) {
    // ...
    // bearer:expected java_third_parties_new_relic
    NewRelic.addCustomParameter("userEmail", user.email);
    // ...
  }

  public void bad2(User user) {
    // ...
    // bearer:expected java_third_parties_new_relic
    NewRelic.recordMetric(user.name, 123);
    // ...
  }

  public void bad3(User user) {
    // ...
    // bearer:expected java_third_parties_new_relic
    NewRelic.noticeError("Some error for user " + user.email);
    // ...
  }

  public void bad4(User user) {
    // ...
    // bearer:expected java_third_parties_new_relic
    NewRelic.setUserId(user.email);
    // ...
  }

  public void bad5(User user) {
    // ...
    // bearer:expected java_third_parties_new_relic
    NewRelic.setUserName(user.name);
    // ...
  }

  public void bad5(User user) {
    // ...
    NewRelic.setUserId(user.uuid);
    NewRelic.addCustomParameter("user", user.uuid);
    // ...
  }
}