// Use bearer:expected java_lang_jwt_verification_bypass to flag expected findings

public static final String JWT_PASSWORD = TextCodec.BASE64.encode("something");

public void bad(String accessToken) {
  // bearer:expected java_lang_jwt_verification_bypass
  Jwt jwt = Jwts.parser().setSigningKey(JWT_PASSWORD).parse(accessToken);
  Claims claims = (Claims) jwt.getBody();
}

public void good(String accessToken) {
  Jwt jwt = Jwts.parser().setSigningKey(JWT_PASSWORD).parseClaimsJws(accessToken);
}