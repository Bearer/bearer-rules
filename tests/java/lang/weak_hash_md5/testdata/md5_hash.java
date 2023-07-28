import java.security.MessageDigest;

public class HashFullname {
   public static void main(User user) {
      MessageDigest md = MessageDigest.getInstance("MD5");
      md.update(user.fullname.getBytes());
      byte[] digest = md.digest();

      String hexString = "";

      for (int i = 0;i<digest.length;i++) {
         hexString.append(Integer.toHexString(0xFF & digest[i]));
      }
      return hexString
   }
}

public class HashSecret {
   public static void main() {
      MessageDigest md = MessageDigest.getInstance("MD5");

      String secret = SECRETS[new Random().nextInt(SECRETS.length)];
      md.update(secret.getBytes());

      byte[] digest = md.digest();

      String hexString = "";

      for (int i = 0;i<digest.length;i++) {
         hexString.append(Integer.toHexString(0xFF & digest[i]));
      }
      return hexString
   }
}

