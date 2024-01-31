import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Cookie;

public class Test
{
  public static final String COOKIE_NAME = "someCookie";

  public void badCookie(HttpServletResponse response) {
    // bearer:expected java_lang_cookie_missing_http_only
    Cookie cookie = new Cookie(COOKIE_NAME, "cookieValue");
    cookie.setPath("/WebGoat");
    response.addCookie(cookie);
  }

   public void badCookie2(HttpServletResponse res) {
    // bearer:expected java_lang_cookie_missing_http_only
    javax.servlet.http.Cookie cookie = new javax.servlet.http.Cookie(COOKIE_NAME, "cookieValue");
    cookie.setSecure(true);
    cookie.setMaxAge(60);
    cookie.setHttpOnly(false);
    res.addCookie(cookie);
  }

  public void badCookie3(HttpServletResponse res) {
    // bearer:expected java_lang_cookie_missing_http_only
    javax.servlet.http.Cookie cookie = new javax.servlet.http.Cookie(COOKIE_NAME, "cookieValue");
    cookie.setSecure(true);
    cookie.setMaxAge(60);
    res.addCookie(cookie);
  }

  public void badJakartaCookie(HttpServletResponse response) {
    // bearer:expected java_lang_cookie_missing_http_only
    jakarta.servlet.http.Cookie jakartaCookie = new jakarta.servlet.http.Cookie(COOKIE_NAME, "someCookieValue");
    jakartaCookie.setMaxAge(60);
    response.addCookie(jakartaCookie);
  }
}