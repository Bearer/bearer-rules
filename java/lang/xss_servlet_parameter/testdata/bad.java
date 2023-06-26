// This file is indirectly testing java_shared_lang_instance

import javax.servlet.Servlet;
import javax.servlet.ServletRequest;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.ServletResponse;

public class Foo extends Servlet
{
  javax.servlet.ServletRequest field;

  public Foo(HttpServletRequest constructor, String foo) {
    constructor.getParameter("name");
  }

  public void main(ServletRequest param, ServletResponse response) {
    param.getParameter("name");
    field.getParameter("name");

    javax.servlet.http.HttpServletRequest local = getReq();
    local.getParameter("name");

    // Fallback
    request.getParameter("name");

    // This is contrived, but here to give full coverage of the shared instance rule
    try {
      x.foo();
    } catch (SomeException e) {
      foo;
    } catch (OtherException|HttpServletRequest e) {
      e.getParameter("name");
    }

    try (ServletRequest resource = getReq()) {
      resource.getParameter("name");
    }
  }
}
