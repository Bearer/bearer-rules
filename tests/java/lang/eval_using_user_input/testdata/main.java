import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

public class Foo {
  public static void bad(HttpServletRequest req, HttpServletResponse res) {
    ScriptEngineManager manager = new ScriptEngineManager();
    ScriptEngine engine = manager.getEngineByName("js");

    String expression = "2 + 3 * " + req.getParameter("numUsers");

    // bearer:expected java_lang_eval_using_user_input
    Object result = engine.eval(expression);
  }

  public static void ok() {
    ScriptEngineManager manager = new ScriptEngineManager();
    ScriptEngine engine = manager.getEngineByName("js");

    String expression = "2 + 3 * 5";

    Object result = engine.eval(expression);
  }
}