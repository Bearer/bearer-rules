package org.owasp.benchmark.testcode;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.crypto.Cipher;

@WebServlet(value = "/sqli-00/BenchmarkTest00008")
public class BenchmarkTest00008 extends HttpServlet {

  // private static final long serialVersionUID = 1L;

  // @Override
  // public void doGet(HttpServletRequest request, HttpServletResponse response)
  // throws ServletException, IOException {
  // doPost(request, response);
  // }

  // @Override
  // public void doPost(HttpServletRequest request, HttpServletResponse response)
  // throws ServletException, IOException {
  // // some code
  // response.setContentType("text/html;charset=UTF-8");

  // String param = "";
  // if (request.getHeader("BenchmarkTest00008") != null) {
  // param = request.getHeader("BenchmarkTest00008");
  // }

  // // URL Decode the header value since req.getHeader() doesn't. Unlike
  // // req.getParameter().
  // param = java.net.URLDecoder.decode(param, "UTF-8");

  // String sql = "{call " + param + "}";

  // try {
  // java.sql.Connection connection =
  // org.owasp.benchmark.helpers.DatabaseHelper.getSqlConnection();
  // java.sql.CallableStatement statement = connection.prepareCall(sql);
  // java.sql.ResultSet rs = statement.executeQuery();
  // org.owasp.benchmark.helpers.DatabaseHelper.printResults(rs, sql, response);

  // } catch (java.sql.SQLException e) {
  // if (org.owasp.benchmark.helpers.DatabaseHelper.hideSQLErrors) {
  // response.getWriter().println("Error processing request.");
  // return;
  // } else
  // throw new ServletException(e);
  // }
  // }

  // public byte[] encryptMe(String text) throws GeneralSecurityException {
  // javax.crypto.Cipher c = Cipher.getInstance("DES/CBC/PKCS5Padding");

  // c.init(javax.crypto.Cipher.ENCRYPT_MODE, keyPair.getPrivate());
  // return c.doFinal(text);
  // }

  public byte[] encryptMe2(String text) throws GeneralSecurityException {
    Cipher c = null;
    c.getInstance("DES/CBC/PKCSSPadding");
    Cipher c1 = Cipher.getInstance("DES/CBC/PKCS5Padding");
    // Cipher.getInstance("DES/CBC/PKCS5Padding");
    Cipher c2 = Cipher.init();
    c2.getInstance("DES/CBC/PKCS5Padding");
    c2.getInstance("SHA1");

    // c.init(Cipher.ENCRYPT_MODE, keyPair.getPrivate());
    // return c.doFinal(text);
  }
}