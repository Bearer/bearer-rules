public class Foo
{
    public void bad(User user)
    {
        // bearer:expected java_lang_standard_output
        System.err.print(user.email);
        // bearer:expected java_lang_standard_output
        System.out.println("This is not okay " + user.creditCard);
    }

    public void ok(User user) {
        System.out.println("This is okay");
        System.err.print((user.name ? "valid user": "invalid user"););
    }
}
