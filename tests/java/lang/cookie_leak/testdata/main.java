// Use bearer:expected java_lang_cookie_leak to flag expected findings

public class BadCookies extends HttpServlet {
  protected void bad(User user, HttpServletRequest request, HttpServletResponse response) {
    // bearer:expected java_lang_cookie_leak
    Cookie cookie = new Cookie("username", user.username);

    // additional cookie config ...
    response.addCookie(cookie);
  }

  protected void good(User user, HttpServletRequest request, HttpServletResponse response) {
    Cookie cookie = new Cookie("currentUser", user.id);

    // additional cookie config ...
    response.addCookie(cookie);
  }
}