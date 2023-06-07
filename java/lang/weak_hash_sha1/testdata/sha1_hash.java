package bearer.tes_files.weak_encryption;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Random;
import javax.servlet.http.HttpServletRequest;
import javax.xml.bind.DatatypeConverter;
import org.owasp.webgoat.container.assignments.AssignmentEndpoint;
import org.owasp.webgoat.container.assignments.AssignmentHints;
import org.owasp.webgoat.container.assignments.AttackResult;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

public class HashingAssignment extends AssignmentEndpoint {

  public String getSha1(HttpServletRequest request) {

    String sha1Hash = (String) request.getSession().getAttribute("sha1Hash");
    if (sha1Hash == null) {

      String secret = SECRETS[new Random().nextInt(SECRETS.length)];

      MessageDigest md = MessageDigest.getInstance("SHA-1");
      md.update(secret.getBytes());
      byte[] digest = md.digest();
      sha1Hash = DatatypeConverter.printHexBinary(digest).toUpperCase();
      request.getSession().setAttribute("sha1Hash", sha1Hash);
    }
    return sha1Hash;
  }
}