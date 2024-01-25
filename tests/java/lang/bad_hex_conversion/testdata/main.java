package strings;

import java.security.MessageDigest;

public class BadHexConversion {

    public String bad(String text) {
        MessageDigest md = MessageDigest.getInstance("SHA-256");
        byte[] resultBytes = md.digest(text.getBytes("UTF-8"));

        StringBuilder stringBuilder = new StringBuilder();
        for (int i = 0, resultBytesLength = resultBytes.length; i < resultBytesLength; i++) {
            byte b = resultBytes[i];
            // bearer:expected java_lang_bad_hex_conversion
            String badHex = Integer.toHexString(b);

            // bearer:expected java_lang_bad_hex_conversion
            stringBuilder.append(Integer.toHexString(resultBytes[i]));
        }

        for (byte b : resultBytes) {
            // bearer:expected java_lang_bad_hex_conversion
            stringBuilder.append(Integer.toHexString(b));
        }
        return stringBuilder.toString();
    }

    public static String ok(String password) {
        MessageDigest md = MessageDigest.getInstance("SHA-1");
        byte[] resultBytes = md.digest(password.getBytes("UTF-8"));

        HexFormat hex = HexFormat.of();
        StringBuilder stringBuilder = new StringBuilder();
        // ok not expected
        for (byte b : resultBytes) {
            stringBuilder.append(hex.formatHex(b));
        }

        return stringBuilder.toString();
    }
}
