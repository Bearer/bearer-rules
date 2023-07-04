// This file is indirectly testing java_shared_lang_instance
import javax.servlet.ServletRequest;
import javax.servlet.http.HttpServletRequest;

public class Main {
  private final static String KEY = "foo";
  javax.servlet.ServletRequest field;

  public Main(HttpServletRequest constructor, String foo) throws ServletException {
    constructor.setAttribute(KEY, getFoo());
  }

  public static void main(HttpServletRequest param) throws ServletException {
    var foo = getFoo();

    param.setAttribute(KEY, foo);
    param.setAttribute(foo, "value");
    param.getSession().setAttribute(KEY, foo);
    param.getSession().putValue(KEY, foo);

    field.setAttribute(KEY, getFoo());

    javax.servlet.http.HttpServletRequest local = getReq();
    local.setAttribute(KEY, getFoo());

    // Fallback
    request.setAttribute(KEY, getFoo());

    // This is contrived, but here to give full coverage of the shared instance rule
    try {
      x.foo();
    } catch (SomeException e) {
      foo;
    } catch (OtherException|HttpServletRequest caughtError) {
      caughtError.setAttribute(KEY, getFoo());
    }

    try (Something abc = getBar()) {
      abc.foo();
    } catch (HttpServletRequest caughtResourceError) {
      caughtResourceError.setAttribute(KEY, getFoo());
    }

    try (ServletRequest resource = getReq()) {
      resource.setAttribute(KEY, getFoo());
    }

    for (ServletRequest forEach : getReqs()) {
      forEach.setAttribute(KEY, getFoo());
    }
  }
}
