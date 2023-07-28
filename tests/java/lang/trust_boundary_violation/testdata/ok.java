public class Main {
  private final static String KEY = "foo";

  public static void main(HttpServletRequest request) {
    request.setAttribute(KEY, "value");
    request.getSession().setAttribute(KEY, "value");
    request.getSession().putValue(KEY, "value");
  }
}
