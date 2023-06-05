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
            log.info("Username is" + request.getParameter("username"));
            log.warn("Username is" + username);
            log.error(username);
            log.error("This is not finding");

          

    }
}
