public class Cls extends HttpServlet
{

    public void handleRequest(HttpServletRequest request, HttpServletResponse response)
    {
        String userID = request.getParameter("userID");

        String filter = "(&(objectclass=person))(|(uid=" + userID + ")(street={0}))";
        String base = "ou=users,ou=system";
        Object[] filters = new Object[] {"First avenue"};
        javax.naming.directory.SearchControls sc = new javax.naming.directory.SearchControls();

        dirContext.search(base, filter, filters, sc);
    }
}