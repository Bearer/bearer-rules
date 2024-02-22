package servlets;

import java.io.File;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class Log extends HttpServlet
{

    public void logInjection(HttpServletRequest request, HttpServletResponse response)
    {
            log = Logger.getLogger(Log.class);
            String username = request.getParameter("username");
// bearer:expected java_lang_log_injection
            log.info("Username is" + request.getParameter("username"));
// bearer:expected java_lang_log_injection
            log.warn("Username is" + username);
// bearer:expected java_lang_log_injection
            log.error(username);
            log.error("This is not finding");

          

    }
}
