import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import org.owasp.encoder.*;

public class HelloWorld extends HttpServlet {
   public void doGet(HttpServletRequest request, HttpServletResponse response) {
      PrintWriter out = response.getWriter();
      String user = request.getQueryString("user");
      encodedUserInput = Encode.forHtml(user)
      out.println(encodedUserInput);
   }
}