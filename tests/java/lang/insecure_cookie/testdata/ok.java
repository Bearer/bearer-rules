import javax.servlet.http.Cookie;

public class Test
{
  public void cookie()
  {
    Cookie c1 = new Cookie("c1", "foo");
    c1.setSecure(true);
    c1.setHttpOnly(true);

    Cookie c2 = new Cookie("c2", "bar");
  }
}
