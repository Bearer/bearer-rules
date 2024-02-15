import javax.servlet.ServletRequest;
import javax.servlet.http.HttpServletRequest;

public class Bad {
  private final static String KEY = "foo";
  static ServletRequest field;

  public Bad(HttpServletRequest constructor, String foo) throws ServletException {
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
  }
}
