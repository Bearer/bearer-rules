public class Main {
  public static void main(HttpServletRequest request) {
    var foo = request.getParameter("foo");
    new Cookie("oops", foo);

    var bar = request.getParameter("bar");
    var c = new Cookie("oops2", "ok");
    c.setValue(bar);

    new Cookie("oops3", foo.replaceAll("\r\n", "oops\r\n"));
  }
}
