public class Main {
  private final static String KEY = "foo";

  public static void main(HttpServletRequest request) {
    var foo = getFoo();

    request.setAttribute(KEY, foo);
    request.setAttribute(foo, "value");
  }
}
