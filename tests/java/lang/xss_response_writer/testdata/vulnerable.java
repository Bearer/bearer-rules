// Import required java libraries
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

// Extend HttpServlet class
public class HelloWorld extends HttpServlet {
 
   public void doGet(HttpServletRequest request, HttpServletResponse response) {

      // Actual logic goes here.
      PrintWriter out = response.getWriter();
      String user = request.getQueryString("user");
      out.println(user);
   }

}