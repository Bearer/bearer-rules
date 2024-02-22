package servlets;

import java.io.File;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class Cls extends HttpServlet
{

    public void handleRequest(HttpServletRequest request, HttpServletResponse response)
    {
            User user;
// bearer:expected java_lang_logger
            logger.error(user.name);
            logger.error(user.name ? "ok": "ok");
    }
}
