package com.test.servlet.cors;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;

public class Foo extends HttpServlet {
  @Override
  protected void bad(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    String paramValue = request.getParameter("bad");
    String header = request.getHeader("bad");
    String queryString = request.getQueryString();

    String[] parameterValues = request.getParameterValues("URL");
    String indexedParameterValue = parameterValues[0];

    Enumeration<String> parameterNames = request.getParameterNames();
    String parameterNamesElem = parameterNames.nextElement();

    Map<String, String[]> parameterMap = request.getParameterMap();
    String indexedValueFromParameterMap = parameterMap.get("URL")[0];

    if (paramValue != null) {
      // bearer:expected java_lang_insecure_allow_origin
      response.setHeader("Access-Control-Allow-Origin", paramValue);

      // bearer:expected java_lang_insecure_allow_origin
      response.addHeader("Access-Control-Allow-Origin", paramValue);

      // bearer:expected java_lang_insecure_allow_origin
      response.addHeader("access-control-allow-origin", paramValue);

      // bearer:expected java_lang_insecure_allow_origin
      response.addHeader("access-control-allow-origin", header);

      // bearer:expected java_lang_insecure_allow_origin
      response.addHeader("access-control-allow-origin", indexedParameterValue);

      // bearer:expected java_lang_insecure_allow_origin
      response.addHeader("access-control-allow-origin", parameterNamesElem);

      // bearer:expected java_lang_insecure_allow_origin
      response.addHeader("access-control-allow-origin", indexedValueFromParameterMap);

      String[] keyValuePairs = queryString.split("=");
      String lastPair = keyValuePairs[keyValuePairs.length - 1];
      // bearer:expected java_lang_insecure_allow_origin
      response.addHeader("access-control-allow-origin", lastPair);

      String headerName = "ACCESS-CONTROL-ALLOW-ORIGIN";

      // bearer:expected java_lang_insecure_allow_origin
      response.addHeader(headerName, paramValue);

      return;
    }
  }

  public void badSessionAttr(HttpServletRequest request, HttpServletResponse response) throws ServletException {
    request.getSession().setAttribute("someAttrName", request.getParameter("bad"));
    String sessionAttr = (String) request.getSession().getAttribute("attributeName");

    // bearer:expected java_lang_insecure_allow_origin
    response.addHeader("access-control-allow-origin", sessionAttr);
  }

  public void badRequestAttr(HttpServletRequest request, HttpServletResponse response) throws ServletException {
    request.setAttribute("someAttrName",request.getParameter("bad"));
    String requestAttr = (String) request.getAttribute("someAttrName");

    // bearer:expected java_lang_insecure_allow_origin
    response.addHeader("access-control-allow-origin", requestAttr);
  }

  public void badServletContext(HttpServletRequest request, HttpServletResponse response) throws ServletException {
    request.getServletContext().setAttribute("someAttrName",request.getParameter("bad"));
    String contextAttr = (String) request.getServletContext().getAttribute("someAttrName");

    // bearer:expected java_lang_insecure_allow_origin
    response.addHeader("access-control-allow-origin", contextAttr);
  }

  public void badModifiedPath(HttpServletRequest request, HttpServletResponse response) throws ServletException {
    String pathInfo = request.getPathInfo();
    String modifiedPath = pathInfo.replaceFirst("/","");

    // bearer:expected java_lang_insecure_allow_origin
    response.addHeader("Access-Control-Allow-Origin", modifiedPath);
  }

  public void ok(HttpServletRequest request, HttpServletResponse response) throws ServletException {
    String paramValue = request.getParameter("bad");
    if paramValue != null {
    // set some other header with user-input
    response.setHeader("X-Example-Header", paramValue);
    }

    String pathInfo = request.getPathInfo();
    String modifiedPath = pathInfo.replaceFirst("/","");
    // set some other header with user-input
    response.setHeader("X-Example-Header", modifiedPath);

    response.setHeader("Access-Control-Allow-Origin", "https://example.com");
    response.addHeader("Access-Control-Allow-Origin", "https://example.com");
    response.addHeader("Access-Control-Allow-Origin", getFromList("key"));
    // bad for other reasons!
    response.addHeader("Access-Control-Allow-Origin", "*");
  }

  public String getFromList(String key){
    HashMap<String, String> corsList = new HashMap<>();
    corsList.put("key", "https://example.com");

    return corsList.get(key);
  }
}