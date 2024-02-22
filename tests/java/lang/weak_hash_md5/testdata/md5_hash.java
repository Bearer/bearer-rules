import java.security.MessageDigest;

public class HashFullname {
   public static void main(User user) {
      MessageDigest md = MessageDigest.getInstance("MD5");
// bearer:expected java_lang_weak_hash_md5
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
// bearer:expected java_lang_weak_hash_md5
      md.update(secret.getBytes());

      byte[] digest = md.digest();

      String hexString = "";

      for (int i = 0;i<digest.length;i++) {
         hexString.append(Integer.toHexString(0xFF & digest[i]));
      }
      return hexString
   }
}

