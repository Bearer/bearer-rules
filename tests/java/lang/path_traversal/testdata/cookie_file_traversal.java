package servlets;

import java.io.File;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class CookieFileTraversal extends HttpServlet
{

    public void handleRequest(HttpServletRequest request, HttpServletResponse response)
    {
        Cookie[] cookies = request.getCookies();
        String userProfile = cookies[0].getValue();
        File file = new File("user/profile/", userProfile);
    }
}
