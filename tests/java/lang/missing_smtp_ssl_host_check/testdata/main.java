// Use bearer:expected java_lang_insecure_smtp to flag expected findings
package smtp;

import org.apache.commons.mail.Email;
import org.apache.commons.mail.SimpleEmail;
import org.apache.commons.mail.MultiPartEmail;
import org.apache.commons.mail.HtmlEmail;
import org.apache.commons.mail.ImageHtmlEmail;

public class InsecureSmtp{

    public static void main(String[] args) throws Exception {
        Email email = new Email();
        email.setHostName("smtp2.googlemail.com");
        // bearer:expected java_lang_missing_smtp_ssl_host_check
        email.setSSLOnConnect(true);
        email.setSSLCheckServerIdentity(false);

        Email simpleEmail = new SimpleEmail();
        simpleEmail.setHostName("smtp2.googlemail.com");
        // bearer:expected java_lang_missing_smtp_ssl_host_check
        simpleEmail.setSSLOnConnect(true);

        MultiPartEmail emailMulti = new MultiPartEmail();
        // bearer:expected java_lang_missing_smtp_ssl_host_check
        emailMulti.setSSLOnConnect(true);
        emailMulti.setHostName("mail.myserver.com");

        HtmlEmail htmlEmail = new HtmlEmail();
        // bearer:expected java_lang_missing_smtp_ssl_host_check
        htmlEmail.setSSLOnConnect(true);
        htmlEmail.setHostName("mail.myserver.com");

        // bad but not this rule
        ImageHtmlEmail imageEmail = new ImageHtmlEmail();
        imageEmail.setHostName("mail.myserver.com");
        imageEmail.setSSLOnConnect(false);
    }
}
