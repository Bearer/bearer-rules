package strings;
import java.util.Formatter;
import java.util.Locale;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServlet;

public class FooBar extends HttpServlet{
  public void bad(HttpServletRequest request, HttpServletResponse response) {
    StringBuilder sb = new StringBuilder();
    Formatter formatter = new Formatter(sb);
    String name = request.getParameter("name");
    String bad = "Name: %s" + name;

    // bearer:expected java_lang_format_string_manipulation
    formatter.format(bad);
    // bearer:expected java_lang_format_string_manipulation
    formatter.format(Locale.US, bad, "Sir/Madam", "Mish", "Bear");

    // bearer:expected java_lang_format_string_manipulation
    System.out.printf(bad, "Mr/s", "Mish", "Bear");
    // bearer:expected java_lang_format_string_manipulation
    System.out.printf(Locale.UK, bad, "Mish", "Bear");

    // bearer:expected java_lang_format_string_manipulation
    System.out.format(bad, "Mish", "Bear");
    // bearer:expected java_lang_format_string_manipulation
    System.out.format(Locale.UK, bad);

    String bad2 = "Username: " + request.getParameter("selectedUsernameFormat");

    // bearer:expected java_lang_format_string_manipulation
    String.format(request.getParameter("titleFormat"), "Dr", "Mish", "Bear");
    // bearer:expected java_lang_format_string_manipulation
    String.format(bad2, "mishbear");
    // bearer:expected java_lang_format_string_manipulation
    String.format(Locale.US, bad2, "mishbear");
  }

  public void good(HttpServletRequest request, HttpServletResponse response) {
    StringBuilder sb = new StringBuilder();
    Formatter formatter = new Formatter(sb);

    // user input is not the format string
    formatter.format("Mish", "Bear", request.getParameter("baz"));
    formatter.format("Name %s", request.getParameter("baz"));
    String.format(Locale.US, "Name %s", request.getParameter("baz"));
  }
}
