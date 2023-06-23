import javax.servlet.Servlet;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;

public class Foo extends Servlet
{
  public void main(ServletRequest request, ServletResponse response) {
    String name = request.getParameter("name");
  }
}