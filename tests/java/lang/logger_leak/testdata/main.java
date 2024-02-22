public class Foo
{
    public void bad(String someVar)
    {
        User user;
        // bearer:expected java_lang_logger_leak
        logger.error(someVar);
        // bearer:expected java_lang_logger_leak
        logger.error("This is not okay " + someVar);
    }

    public void ok(User user) {
        logger.error("This is okay");
        logger.error("This is bad but handled by another rule: " + user.name);
    }
}
