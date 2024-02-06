import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.ServletException;
import javax.servlet.annotation.*;
import java.io.IOException;

public class Foo extends HttpServlet {
  protected void bad(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    String url;
    url = request.getParameter("returnPath");

    if (url != null) {
      // bearer:expected java_lang_open_redirect
      response.sendRedirect(url);
    };

    // bearer:expected java_lang_open_redirect
    response.addHeader("Location", request.getParameter("redirectTo"));
    response.sendError(302);

    url = request.getParameter("someUrl");
    if (url != null && !url.isEmpty()) {
      // bearer:expected java_lang_open_redirect
      response.sendRedirect(url);
    }
  }

  protected void good(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    String url;
    url = "https://localhost:3000/foo-bar"

    if (url != null) {
      response.sendRedirect(url);
    };

    response.addHeader("Location", "/ServletSample/UnvalidatedRedirect");
    response.sendError(302);
  }
}
