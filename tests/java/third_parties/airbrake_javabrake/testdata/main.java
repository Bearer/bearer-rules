// Use bearer:expected java_third_parties_airbrake_javabrake to flag expected findings
import io.airbrake.javabrake.Airbrake;
import io.airbrake.javabrake.Notice;

public class AirbrakeJavabrake() {
  public static void bad(User user) {
    try {
      do();
    } catch (IOException e) {
      // bearer:expected java_third_parties_airbrake_javabrake
      Airbrake.report(e + " for " + user.username);
    }
  }

  public static void bad(User user) {
    Notice notice = Airbrake.buildNotice(e);
    // bearer:expected java_third_parties_airbrake_javabrake
    notice.setContext("user", user.username);
    // bearer:expected java_third_parties_airbrake_javabrake
    notice.setParam("email", user.email);
    Airbrake.send(notice);
  }

  public static void ok() {
    try {
      do();
    } catch (IOException e) {
      Airbrake.report(e);
    }
  }
}
