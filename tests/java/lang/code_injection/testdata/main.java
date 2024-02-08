package script;
import javax.script.*;

public class Foo {

  public void bad(String script, HttpServletRequest req, HttpServletResponse res) {
    ScriptEngineManager factory = new ScriptEngineManager();
    ScriptEngine engine = factory.getEngineByName("javascript");

    engine.eval(script);
    Invocable invocable = (Invocable) engine;

    var foo = req.getParameter("foo");

    // bearer:expected java_lang_code_injection
    String badFunc = (String) invocable.invokeFunction("myFunc", foo);

    Object obj = engine.get("obj");
    // bearer:expected java_lang_code_injection
    Object badMethod = invocable.invokeMethod(obj, "myFunc", foo);
  }

  public void ok(String script) throws Exception {
    ScriptEngineManager factory = new ScriptEngineManager();
    ScriptEngine engine = factory.getEngineByName("javascript");

    engine.eval(script);
    Invocable invocable = (Invocable) engine;

    // ok
    String badFunc = (String) invocable.invokeFunction("myFunc", "safe");

    // ok
    Object obj = engine.get("obj");
    Object badMethod = invocable.invokeMethod(obj, "myFunc", "safe");
  }
}
