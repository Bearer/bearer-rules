import java.security.MessageDigest;

public class HashPassword {
   public static void main(User user) {
      MessageDigest md = MessageDigest.getInstance("MD5");

      md.update(user.newPassword.getBytes());
      byte[] digest = md.digest();

      String hexString = "";

      for (int i = 0;i<digest.length;i++) {
         hexString.append(Integer.toHexString(0xFF & digest[i]));
      }
      return hexString
   }
}