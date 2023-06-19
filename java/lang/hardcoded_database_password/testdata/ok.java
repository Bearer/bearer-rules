import java.sql.Connection;
import java.sql.DriverManager;

import com.amazonaws.secretsmanager.caching.SecretCache;

public class Foo
{
  public static void main() {
    private final SecretCache cache  = new SecretCache();

    String url = "jdbc:mysql://localhost:3306/foo";
    String password = cache.getSecretString("foo");
    Connection conn = DriverManager.getConnection(url, "admin", password);
  }
}