import javax.servlet.http.Cookie;

public class Foo {
  public static void bad(String[] args) {
    Cookie cookie = new Cookie("username", "john_doe");
    // bearer:expected java_lang_permissive_cookie_config
    cookie.setMaxAge(-1);
    // bearer:expected java_lang_permissive_cookie_config
    cookie.setPath("/");
  }

  public static void good(String[] args) {
    Cookie cookie = new Cookie("username", "john_doe");

    cookie.setMaxAge(300);
    cookie.setPath("/my-path");
  }
}