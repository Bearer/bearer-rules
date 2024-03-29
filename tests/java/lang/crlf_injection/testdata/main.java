package inject;

import javax.servlet.http.HttpServletRequest;
import java.util.logging.*;

public class CRLFInjection extends HttpServlet {
  public void javaUtilLogging(HttpServletRequest req, HttpServletResponse res) {
    String dangerous = req.getParameter("test");
    String okay = "some known string";

    logger = Logger.getLogger(Log.class);
    logger.setLevel(Level.ALL);

    // bearer:expected java_lang_crlf_injection
    logger.info(dangerous);
    // bearer:expected java_lang_crlf_injection
    logger.info(dangerous.replace("hello", "world"));
    // bearer:expected java_lang_crlf_injection
    logger.info(dangerous.replace('\n', ""));
    // bearer:expected java_lang_crlf_injection
    logger.info(dangerous.replaceAll("\r", ""));

    // logrb cases
    // - logrb​(Level level, ResourceBundle bundle, String msg, Object... params)
    // - logrb​(Level level, String sourceClass, String sourceMethod, ResourceBundle bundle, String msg, Object... params)

    // bearer:expected java_lang_crlf_injection
    logger.logrb(Level.INFO, safe, dangerous, safe, safe);
    // bearer:expected java_lang_crlf_injection
    logger.logrb(Level.INFO, safe, safe, ResourceBundle.getBundle("package.ExampleResource", locale), dangerous, safe);

    // okay
    logger.config("hello world" + okay);
    logger.info(dangerous.replace('\r', ' ').replace('\n', ' '));
    logger.logrb(Level.INFO, safe, safe, dangerous + "bundle", safe);
    logger.fine(dangerous.replaceAll("[\r\n]+", ""));
  }
}