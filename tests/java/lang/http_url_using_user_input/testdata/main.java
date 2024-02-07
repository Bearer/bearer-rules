import java.net.*;

public class Foo {
    private static final int TIMEOUT_IN_SECONDS = 20;

    public void bad(HttpServletRequest req, HttpServletResponse res) {
      String dangerous = req.getParameter("someRandomUrl");
      // bearer:expected java_lang_http_url_using_user_input
      new URL(dangerous).openConnection().getInputStream();
      // bearer:expected java_lang_http_url_using_user_input
      new URL(dangerous).openConnection().getLastModified();
      // bearer:expected java_lang_http_url_using_user_input
      new URL(dangerous).openStream();
      // bearer:expected java_lang_http_url_using_user_input
      new URL(dangerous).getContent();
      // bearer:expected java_lang_http_url_using_user_input
      new URL(dangerous).getContent(new Class[0]);
      URL bad = new URL(dangerous);
      // bearer:expected java_lang_http_url_using_user_input
      bad.openConnection().connect();
    }

    public void bad2(HttpServletRequest req, HttpServletResponse res) {
      // bearer:expected java_lang_http_url_using_user_input
      new URL("http://safe.com").openConnection(new Proxy(Proxy.Type.HTTP, new InetSocketAddress(req.getParameter("someRandomUrl"), 8080))).connect();

      int port = url.getPort();
      port = port > 0 ? port : 443;
      try (Socket s = ctx.getSocketFactory().createSocket()) {
        // bearer:expected java_lang_http_url_using_user_input
        InetSocketAddress socketAddress = new InetSocketAddress(req.getRequestURI(), port);
      }
    }

    public static void good(HttpServletRequest req, HttpServletResponse res) {
      String encodedString = URLEncoder.encode(req.getRequestURI(), StandardCharsets.UTF_8);
      new URL(encodedString).openConnection();

      new URL("http://safe.com").openConnection();
    }
}
