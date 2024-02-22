import java.sql.Connection;
import java.sql.DriverManager;

public class Foo
{
  public static void main() {
    String url = "jdbc:mysql://localhost:3306/foo";
// bearer:expected java_lang_hardcoded_database_password
    Connection conn = DriverManager.getConnection(url, "admin", "admin");
  }
}