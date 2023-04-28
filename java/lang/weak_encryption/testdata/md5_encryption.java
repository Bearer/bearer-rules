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

@RestController
@AssignmentHints({"crypto-hashing.hints.1", "crypto-hashing.hints.2"})
public class HashingAssignment extends AssignmentEndpoint {


  @RequestMapping(path = "/crypto/hashing/md5", produces = MediaType.TEXT_HTML_VALUE)
  @ResponseBody
  public String getMd5(HttpServletRequest request) throws NoSuchAlgorithmException {

    String md5Hash = (String) request.getSession().getAttribute("md5Hash");
    if (md5Hash == null) {

      String secret = SECRETS[new Random().nextInt(SECRETS.length)];

      MessageDigest md = MessageDigest.getInstance("MD5");
      md.update(secret.getBytes());
      byte[] digest = md.digest();
      md5Hash = DatatypeConverter.printHexBinary(digest).toUpperCase();
      request.getSession().setAttribute("md5Hash", md5Hash);
    }
    return md5Hash;
  }
}