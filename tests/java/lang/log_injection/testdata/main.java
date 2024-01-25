package inject;

import javax.servlet.http.HttpServletRequest;
import java.util.logging.*;

public class Log extends HttpServlet {
    public void javaUtilLogging(HttpServletRequest req, HttpServletResponse res) {
        String dangerous = req.getParameter("test");

        logger = Logger.getLogger(Log.class);
        logger.setLevel(Level.ALL);

        // bearer:expected java_lang_log_injection
        logger.config(dangerous);
        // bearer:expected java_lang_log_injection
        logger.exiting("Exit:" + dangerous);

        // okay
        logger.fine("hello world");
    }

}
