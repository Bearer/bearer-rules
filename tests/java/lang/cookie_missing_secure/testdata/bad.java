import javax.servlet.http.Cookie;

public class Test
{
  public void cookie() {
// bearer:expected java_lang_cookie_missing_secure
    Cookie cookie = new Cookie(COOKIE_NAME, cookieValue);
    cookie.setPath("/WebGoat");
    response.addCookie(cookie);
  }
}