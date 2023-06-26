import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Foo extends HttpServlet {
    public void badExec(HttpServletRequest request, HttpServletResponse response) {
        String name = request.getParameter("name");

        Runtime r = Runtime.getRuntime();
        r.exec("sh -c echo " + name);

        Runtime.getRuntime().exec("sh -c echo " + name);
    }

    public void badProcess(HttpServletRequest request, HttpServletResponse response) {
        String name = request.getParameter("name");

        ProcessBuilder pb = new ProcessBuilder("sh -c echo " + name);
        Process p = pb.start();

        pb.command("sh -c echo " + name);
    }
}
