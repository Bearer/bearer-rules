import org.apache.http.client.methods.HttpGet;
// legacy
import org.apache.commons.httpclient.methods.GetMethod;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.net.URLEncoder;
import static com.google.common.net.UrlEscapers.urlPathSegmentEscaper;

public class Foo extends HttpServlet {
  public void bad(HttpServletRequest req, HttpServletResponse res) {
    String externalParam = req.getParameter("foo");

    // bearer:expected java_lang_http_parameter_pollution
    HttpGet httpget2 = new HttpGet("http://example.com?param=" + externalParam);
  }

  public void legacyBad(HttpServletRequest req, HttpServletResponse res) {
    String externalParam = req.getParameter("bar");

    // bearer:expected java_lang_http_parameter_pollution
    GetMethod get = new GetMethod("http://example.com?param=" + externalParam);
    // bearer:expected java_lang_http_parameter_pollution
    get.setQueryString("param=" + externalParam);
  }

  public void ok(HttpServletRequest req, HttpServletResponse response) {
    String externalParam = req.getParameter("baz");
    String escapedParam = urlPathSegmentEscaper().escape(externalParam);

    HttpGet escaped = new HttpGet("http://example.com?param=" + escapedParam);

    GetMethod get = new GetMethod("http://example.com?param=" + URLEncoder.encode(externalParam));

    String escapedParam2 = UrlEscapers.urlPathSegmentEscaper().escape(externalParam);
    GetMethod get = new GetMethod("http://example.com?param=" + escapedParam2);
    get.setQueryString("param=" + escapedParam2);
  }
}
