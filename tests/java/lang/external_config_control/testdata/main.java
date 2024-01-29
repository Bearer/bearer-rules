// Use bearer:expected java_lang_external_config_control to flag expected findings
package unsafe;

import javax.servlet.http.HttpServletRequest;
import java.sql.Connection;
import java.sql.SQLException;

public class Connect {
  private HttpServletRequest globalRequest;
  private Connection globalConn;

  public static void bad(Connection conn, HttpServletRequest request) throws SQLException {
    var foo = request.getParameter("foo");
    // bearer:expected java_lang_external_config_control
    conn.setCatalog(foo);
  }

  public void bad2() throws SQLException {
    String bar = globalRequest.getParameter("bar");
    // bearer:expected java_lang_external_config_control
    globalConn.setCatalog(bar);
  }

  public static void ok(Connection conn, HttpServletRequest request) throws SQLException {
    var baz = org.apache.commons.text.StringEscapeUtils.unescapeJava(request.getParameter("baz"));
    conn.setCatalog(baz);
    globalConn.setCatalog("known");
  }
}
