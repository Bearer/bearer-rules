public class HashPassword {
   public static void main(User user) {
      java.security.MessageDigest md = java.security.MessageDigest.getInstance("MD5");

// bearer:expected java_lang_weak_password_hash_md5
      md.update(user.newPassword.getBytes());
      byte[] digest = md.digest();

      String hexString = "";

      for (int i = 0;i<digest.length;i++) {
         hexString.append(Integer.toHexString(0xFF & digest[i]));
      }
      return hexString
   }
}