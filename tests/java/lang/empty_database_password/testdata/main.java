// Use bearer:expected java_lang_empty_database_password to flag expected findings
import java.sql.Connection;
import java.sql.DriverManager;

public class Foo
{
  public static void bad() {
    String url = "jdbc:mysql://localhost:3306/foo";
    // bearer:expected java_lang_empty_database_password
    Connection conn = DriverManager.getConnection(url, "root", "");
  }

  public static void ok() {
    String url = "jdbc:mysql://localhost:3306/bar";
    Connection conn = DriverManager.getConnection(url, "admin", "admin");
  }
}