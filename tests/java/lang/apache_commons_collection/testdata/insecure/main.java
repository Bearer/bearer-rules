import org.apache.commons.collections3;

public class Foo {
  public static void bad(String[] args) throws Exception {
    // bearer:expected java_lang_apache_commons_collection
    InvokerTransformer transformer = new InvokerTransformer("exec", new Class[]{String.class}, new Object[]{"calc.exe"});
    Object result = transformer.transform(null);
  }
}
