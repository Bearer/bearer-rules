package cookie;

import org.apache.commons.text.StringEscapeUtils;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServletResponseWrapper;

public class FooBar extends HttpServlet {
    public void bad(HttpServletRequest req, HttpServletResponse resp) {
        String userInput = req.getParameter("barbaz");
        // bearer:expected java_lang_http_response_splitting
        resp.addHeader("MY_HEADER", userInput);

        String paramNames = req.getParameterNames().nextElement();
        // bearer:expected java_lang_http_response_splitting
        resp.setHeader("PARAM_NAMES", paramNames);

        String paramValues = req.getParameterValues("input")[0];
        // bearer:expected java_lang_http_response_splitting
        resp.addHeader("CUSTOM_HEADER", paramValues);

        String paramMap = req.getParameterMap().get("input")[0];
        // bearer:expected java_lang_http_response_splitting
        resp.addHeader("CUSTOM_HEADER", paramMap);

        String contextPath = req.getPathInfo();
        // bearer:expected java_lang_http_response_splitting
        resp.addHeader("PATH", contextPath);
    }

    public void alsoBad(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String header = req.getHeader("input");
        // bearer:expected java_lang_http_response_splitting
        resp.addHeader("MY_HEADER", header);
        // bearer:expected java_lang_http_response_splitting
        resp.setHeader("MY_HEADER", header);

        String param = req.getParameter("input");
        HttpServletResponseWrapper wrapper = new HttpServletResponseWrapper(resp);
        // bearer:expected java_lang_http_response_splitting
        wrapper.addHeader("PARAM_HEADER", param);
        // bearer:expected java_lang_http_response_splitting
        wrapper.setHeader("PARAM_HEADER", param);
    }

    protected void ok(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String data = req.getParameter("input");
        String input = data.replaceAll("[\r\n]+", "");
        resp.addHeader("SAFE_INPUT", input);
        resp.setHeader("SAFE_INPUT", input);

        var baz = StringEscapeUtils.unescapeJava(request.getParameter("baz"));
        resp.setHeader("BAZ_VALUE", header);

        String contextPath = req.getPathInfo();
        contextPath = contextPath.replaceAll("[\r\n]+", "");
        resp.addHeader("ALL_GOOD", contextPath);
    }
}
