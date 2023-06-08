public class Cls extends HttpServlet
{

    public void handleRequest(HttpServletRequest request, HttpServletResponse response)
    {
        String userID = request.getParameter("userID");

        javax.xml.xpath.XPathFactory xpf = javax.xml.xpath.XPathFactory.newInstance();
        javax.xml.xpath.XPath xp = xpf.newXPath();

        String expression = "/Users/User[@userID='" + userID + "']";
        String result = xp.evaluate(expression, xmlDocument);
    }
}