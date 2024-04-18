public class FlagSecure extends Activity {
  public void ok() {
    getWindow().setFlags(WindowManager.LayoutParams.FLAG_SECURE,
                         WindowManager.LayoutParams.FLAG_SECURE);

    activity.getWindow().addFlags(WindowManager.LayoutParams.FLAG_SECURE);
  }

  public void bad() {
    // bearer:expected java_android_prevent_screenshot
    activity.getWindow().addFlags("some other flag");
    // bearer:expected java_android_prevent_screenshot
    getWindow().setFlags("some other flag", "another other flag");
  }
}