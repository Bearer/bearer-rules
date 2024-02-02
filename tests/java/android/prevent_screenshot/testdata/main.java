public class FlagSecure extends Activity {
  public void bad() {
    // bearer:expected java_android_prevent_screenshot
    getWindow().setFlags(WindowManager.LayoutParams.FLAG_SECURE,
                         WindowManager.LayoutParams.FLAG_SECURE);
    // bearer:expected java_android_prevent_screenshot
    activity.getWindow().addFlags(WindowManager.LayoutParams.FLAG_SECURE);
  }

  public void ok() {
    activity.getWindow().addFlags("some other flag");
  }
}