public class Main {
  public static void main(HttpServletRequest request) {
    var foo = request.getParameter("foo");
// bearer:expected java_lang_http_response_splitting
    new Cookie("oops", foo);

    var bar = request.getParameter("bar");
    var c = new Cookie("oops2", "ok");
// bearer:expected java_lang_http_response_splitting
    c.setValue(bar);

// bearer:expected java_lang_http_response_splitting
    new Cookie("oops3", foo.replaceAll("\r\n", "oops\r\n"));
  }
}
