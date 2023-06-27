public class Main {
  public static void main(HttpServletRequest request) {
    var foo = request.getParameter("foo").replaceAll("\r\n", " ");
    new Cookie("oops", foo);

    var bar = org.apache.commons.text.StringEscapeUtils.unescapeJava(request.getParameter("bar"));
    var c = new Cookie("oops2", "ok");
    c.setValue(bar);
  }
}
