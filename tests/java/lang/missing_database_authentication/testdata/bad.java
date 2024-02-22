import java.sql.Connection;
import java.sql.DriverManager;

public class Foo
{
  public static void main() {
    String url = "jdbc:mysql://localhost:3306/foo";
// bearer:expected java_lang_missing_database_authentication
    Connection conn = DriverManager.getConnection(url, "root", "");
  }
}