public class Foo
{
    public void bad()
    {
        User user;
        // bearer:expected java_lang_logger
        logger.error(user.name);
        // bearer:expected java_lang_logger
        logger.error("This is not okay " + user.name);
    }

    public void ok() {
        logger.error("This is okay");
    }
}
