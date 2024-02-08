import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class Foo extends HttpServlet {
  @Override
  protected void bad(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    String paramValue = request.getParameter("bad");
    String header = request.getHeader("bad");
    String queryString = request.getQueryString();

    String[] parameterValues = request.getParameterValues("URL");
    String indexedParameterValue = parameterValues[0];

    Enumeration<String> parameterNames = request.getParameterNames();
    String parameterNamesElem = parameterNames.nextElement();

    Map<String, String[]> parameterMap = request.getParameterMap();
    String indexedValueFromParameterMap = parameterMap.get("URL")[0];

    if (paramValue != null) {
      // bearer:expected java_lang_permissive_allow_origin
      response.setHeader("Access-Control-Allow-Origin", "*");

      // bearer:expected java_lang_permissive_allow_origin
      response.addHeader("Access-Control-Allow-Origin", "*");

      // bearer:expected java_lang_permissive_allow_origin
      response.setHeader("access-control-allow-origin", "*");

      // bearer:expected java_lang_permissive_allow_origin
      response.addHeader("access-control-allow-origin", "*");

      String headerName = "ACCESS-CONTROL-ALLOW-ORIGIN";
      // bearer:expected java_lang_permissive_allow_origin
      response.addHeader(headerName, "*");

      return;
    }
  }


  public void badVar(HttpServletRequest request, HttpServletResponse response) throws ServletException {
    String everythingGoes = "*";

    // bearer:expected java_lang_permissive_allow_origin
    response.addHeader("Access-Control-Allow-Origin", everythingGoes);
  }

  public void ok(HttpServletRequest request, HttpServletResponse response) throws ServletException {
    // set some other header with user-input
    response.setHeader("X-Example-Header", "*");
  }
}