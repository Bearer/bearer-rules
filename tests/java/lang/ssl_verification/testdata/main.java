import org.apache.http.impl.client.DefaultHttpClient;
import javax.net.ssl.SSLContext;

public class Foo {
  public static void bad() {
    // bearer:expected java_lang_ssl_verification
    new DefaultHttpClient();

    // bearer:expected java_lang_ssl_verification
    SSLContext.getInstance("SSL");
  }

  public static void ok() {
    SSLContext.getInstance("TLS");
  }
}
