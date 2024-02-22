// This file is indirectly testing java_shared_lang_instance
import javax.servlet.ServletRequest;
import javax.servlet.http.HttpServletRequest;

public class Main {
  private final static String KEY = "foo";
  javax.servlet.ServletRequest field;

  public Main(HttpServletRequest constructor, String foo) throws ServletException {
// bearer:expected java_lang_trust_boundary_violation
    constructor.setAttribute(KEY, getFoo());
  }

  public static void main(HttpServletRequest param) throws ServletException {
    var foo = getFoo();

// bearer:expected java_lang_trust_boundary_violation
    param.setAttribute(KEY, foo);
// bearer:expected java_lang_trust_boundary_violation
    param.setAttribute(foo, "value");
// bearer:expected java_lang_trust_boundary_violation
    param.getSession().setAttribute(KEY, foo);
// bearer:expected java_lang_trust_boundary_violation
    param.getSession().putValue(KEY, foo);

// bearer:expected java_lang_trust_boundary_violation
    field.setAttribute(KEY, getFoo());

    javax.servlet.http.HttpServletRequest local = getReq();
// bearer:expected java_lang_trust_boundary_violation
    local.setAttribute(KEY, getFoo());

    // Fallback
// bearer:expected java_lang_trust_boundary_violation
    request.setAttribute(KEY, getFoo());

    // This is contrived, but here to give full coverage of the shared instance rule
    try {
      x.foo();
    } catch (SomeException e) {
      foo;
    } catch (OtherException|HttpServletRequest caughtError) {
// bearer:expected java_lang_trust_boundary_violation
      caughtError.setAttribute(KEY, getFoo());
    }

    try (Something abc = getBar()) {
      abc.foo();
    } catch (HttpServletRequest caughtResourceError) {
// bearer:expected java_lang_trust_boundary_violation
      caughtResourceError.setAttribute(KEY, getFoo());
    }

    try (ServletRequest resource = getReq()) {
// bearer:expected java_lang_trust_boundary_violation
      resource.setAttribute(KEY, getFoo());
    }

    for (ServletRequest forEach : getReqs()) {
// bearer:expected java_lang_trust_boundary_violation
      forEach.setAttribute(KEY, getFoo());
    }
  }
}
