import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Bar extends HttpServlet
{
  public void main(HttpServletRequest request, HttpServletResponse response) {
    String queryString = request.getQueryString();
  }
}