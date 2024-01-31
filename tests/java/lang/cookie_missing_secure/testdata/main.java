// Use bearer:expected java_lang_cookie_missing_secure to flag expected findings

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Cookie;

public class Test
{
  public static final String COOKIE_NAME = "someCookie";

   public void badCookie(HttpServletResponse res) {
    // bearer:expected java_lang_cookie_missing_secure
    javax.servlet.http.Cookie cookie = new javax.servlet.http.Cookie(COOKIE_NAME, "cookieValue");
    cookie.setSecure(false);
    cookie.setMaxAge(60);
    cookie.setHttpOnly(true);
    res.addCookie(cookie);
  }

  public void badCookie2(HttpServletResponse res) {
    // bearer:expected java_lang_cookie_missing_secure
    javax.servlet.http.Cookie cookie = new javax.servlet.http.Cookie(COOKIE_NAME, "cookieValue");
    cookie.setHttpOnly(true);
    cookie.setMaxAge(60);
    res.addCookie(cookie);
  }

  public void badJakartaCookie(HttpServletResponse response) {
    // bearer:expected java_lang_cookie_missing_secure
    jakarta.servlet.http.Cookie jakartaCookie = new jakarta.servlet.http.Cookie(COOKIE_NAME, "someCookieValue");
    jakartaCookie.setMaxAge(60);
    response.addCookie(jakartaCookie);
  }

  public void badJakartaCookie2(HttpServletResponse response) {
    // bearer:expected java_lang_cookie_missing_secure
    jakarta.servlet.http.Cookie jakartaCookie = new jakarta.servlet.http.Cookie(COOKIE_NAME, "someCookieValue");
    jakartaCookie.setSecure(false);
    jakartaCookie.setMaxAge(60);
    response.addCookie(jakartaCookie);
  }
}

