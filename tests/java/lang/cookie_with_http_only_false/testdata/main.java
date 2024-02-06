import javax.servlet.http.Cookie;

public class Foo
{
  public void cookie()
  {
    Cookie c1 = new Cookie("c1", "foo");
    // bearer:expected java_lang_cookie_with_http_only_false
    c1.setHttpOnly(false);

    boolean f = false;
    javax.servlet.http.Cookie c2 = new javax.servlet.http.Cookie("c2", "bar");
    // bearer:expected java_lang_cookie_with_http_only_false
    c2.setHttpOnly(f);
  }
}

public class Bar
{
  public void cookie()
  {
    Cookie c1 = new Cookie("c1", "foo");
    c1.setSecure(true);
    c1.setHttpOnly(true);

    Cookie c2 = new Cookie("c2", "bar");
  }
}

