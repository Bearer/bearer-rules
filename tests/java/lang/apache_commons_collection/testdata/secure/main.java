import org.apache.commons.collections3;

public class Foo {
  public static void bad(String[] args) throws Exception {
    // ok - version 3.2.2 +
    InvokerTransformer transformer = new InvokerTransformer("exec", new Class[]{String.class}, new Object[]{"calc.exe"});
    Object result = transformer.transform(null);
  }
}
