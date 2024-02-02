package script;
import javax.script.*;

public class Foo {

  public void bad(String script, HttpServletResponse response) throws Exception {
    ScriptEngineManager factory = new ScriptEngineManager();
    ScriptEngine engine = factory.getEngineByName("javascript");

    engine.eval(script);
    Invocable invocable = (Invocable) engine;

    var foo = request.getParameter("foo");

    // bearer:expected java_lang_code_injection_rule
    String badFunc = (String) invocable.invokeFunction("myFunc", foo);

    Object obj = engine.get("obj");
    // bearer:expected java_lang_code_injection_rule
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
