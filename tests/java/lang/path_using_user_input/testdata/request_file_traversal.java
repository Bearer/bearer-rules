package servlets;

import java.io.File;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.io.FilenameUtils;

public class Cls extends HttpServlet
{

    public void handleRequest(HttpServletRequest request, HttpServletResponse response)
    {
        String image = request.getParameter("user_profile_picture");
// bearer:expected java_lang_path_using_user_input
        File file = new File("user/profile/", image);
        File okFile = new File("user/profile/", image ? ok : ok);
    }
}
