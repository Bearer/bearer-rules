import java.lang.reflect.*;

public class Foo {
  public static void bad(HttpServletRequest request, HttpServletResponse response) throws Exception {
    // bearer:expected java_lang_reflection_using_user_input
    Class<?> klass = Class.forName(request.getParameter("userClass"));
    Object obj = klass.newInstance();

    String methodName = request.getParameter("userMethod");

    // bearer:expected java_lang_reflection_using_user_input
    Method method = klass.getMethod(methodName);
    method.invoke(obj);
  }

  public static void ok(String[] args) throws Exception {
    Class<?> klass = Class.forName(args[0]);
    Object obj = klass.newInstance();

    String methodName = args[1];

    Method method = klass.getMethod(methodName);
    method.invoke(obj);
  }
}