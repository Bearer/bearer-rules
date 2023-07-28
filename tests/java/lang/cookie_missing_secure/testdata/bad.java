import javax.servlet.http.Cookie;

public class Test
{
  public void cookie() {
    Cookie cookie = new Cookie(COOKIE_NAME, cookieValue);
    cookie.setPath("/WebGoat");
    response.addCookie(cookie);
  }
}