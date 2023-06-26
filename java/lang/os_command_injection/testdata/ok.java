import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Foo extends HttpServlet {
    public void badProcess(HttpServletRequest request, HttpServletResponse response) {
        String name = request.getParameter("name");

        if name == currentUser.name {
            ProcessBuilder pb = new ProcessBuilder("sh -c echo " + currentUser.name);
        } else {
            ProcessBuilder pb = new ProcessBuilder("sh -c echo Hello");
        }

        Process p = pb.start();
    }
}
