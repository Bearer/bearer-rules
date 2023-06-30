import javax.servlet.http.Cookie;

public class Test
{
  public void cookie()
  {
    Cookie c1 = new Cookie("c1", "foo");
    c1.setHttpOnly(false);

    boolean f = false;
    javax.servlet.http.Cookie c2 = new javax.servlet.http.Cookie("c2", "bar");
    c2.setHttpOnly(f);
  }
}
