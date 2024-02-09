public class FooBar {
    public void bad(User user) throws Exception {
        if (!user.isValid()) {
          // bearer:expected java_lang_exception
          throw new Exception("Invalid User: " + user.email);
        }
    }

    public void ok(User user) throws Exception {
        if (!user.isValid()) {
          throw new Exception("Invalid User: " + user.uuid);
        }
    }
}