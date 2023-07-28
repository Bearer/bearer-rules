import java.sql.Connection;
import java.sql.DriverManager;

public class Foo
{
  public static void main() {
    String url = "jdbc:mysql://localhost:3306/foo";
    Connection conn = DriverManager.getConnection(url, "admin", "bad-but-not-missing");
  }
}