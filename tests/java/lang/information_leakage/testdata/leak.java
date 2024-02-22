public class Main {
  public static void main() {
    try {
      // something risky!
    }
    catch (Exception e)
    {
// bearer:expected java_lang_information_leakage
      e.printStackTrace();
    }
  }
}