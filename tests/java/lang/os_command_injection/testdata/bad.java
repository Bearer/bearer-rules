import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Foo extends HttpServlet {
    public void badExec(HttpServletRequest request, HttpServletResponse response) {
        String name = request.getParameter("name");

        Runtime r = Runtime.getRuntime();
// bearer:expected java_lang_os_command_injection
        r.exec("sh -c echo " + name);

// bearer:expected java_lang_os_command_injection
        Runtime.getRuntime().exec("sh -c echo " + name);
    }

    public void badProcess(HttpServletRequest request, HttpServletResponse response) {
        String name = request.getParameter("name");

// bearer:expected java_lang_os_command_injection
        ProcessBuilder pb = new ProcessBuilder("sh -c echo " + name);
        Process p = pb.start();

// bearer:expected java_lang_os_command_injection
        pb.command("sh -c echo " + name);
    }
}
