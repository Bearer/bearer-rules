// Use bearer:expected java_lang_path_traversal to flag expected findings

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.nio.file.Path;
import java.nio.file.Paths;

public class Foo {
  public void bad(HttpServletRequest request, HttpServletResponse response) {
    String safeDirectory = "/safe_dir/";
    // bearer:expected java_lang_path_traversal
    Path fullPath = Paths.get(request.getParameter("filepath"));

    if (fullPath.startsWith(Paths.get(safeDirectory))) {
      // ...
    }
  }

  public void bad2(HttpServletRequest request, HttpServletResponse response) {
    String safeDirectory = "/safe_dir/";
    String filename = request.getParameter("filepath");
    // bearer:expected java_lang_path_traversal
    Path fullPath = Paths.get("tmp/user/" + filename);

    if (fullPath.startsWith(Paths.get(safeDirectory))) {
      // ...
    }
  }

  public void ok(HttpServletRequest request, HttpServletResponse response) {
    String safeDirectory = "/safe_dir/";
    String filepath = "/tmp/user/bar.txt";
    Path fullPath = Paths.get(request.getParameter("filepath")).normalize();
    Path fullPath = Paths.get(filepath).normalize();

    if (fullPath.startsWith(Paths.get(safeDirectory))) {
      // ...
    }
  }
}


