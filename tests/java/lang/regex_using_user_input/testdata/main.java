import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class FooBar {
  public static void bad(HttpServletRequest request, HttpServletResponse response) {
    // bearer:expected java_lang_regex_using_user_input
    Pattern pattern = Pattern.compile(request.getParameter("dangerousRegex"));
    Matcher matcher = pattern.matcher(request.getParameter("userStr"));
    if (matcher.matches()) {
        System.out.println("Match found!");
    } else {
        System.out.println("No match found!");
    }
  }

  public static void good(String input, String regexStr) {
    Pattern pattern = Pattern.compile(regexStr);
    Matcher matcher = pattern.matcher(input);
    if (matcher.matches()) {
        System.out.println("Match found!");
    } else {
        System.out.println("No match found!");
    }
  }

  public static void good(HttpServletRequest request, HttpServletResponse response) {
    Pattern pattern = Pattern.compile("\A");
    Matcher matcher = pattern.matcher(request.getParameter("matchMe"));
    if (matcher.matches()) {
        System.out.println("Match found!");
    } else {
        System.out.println("No match found!");
    }
  }
}