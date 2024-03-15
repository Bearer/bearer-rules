public boolean bad(String password) {
  boolean passwordCorrect = "admin".equals(username)
    // bearer:expected java_lang_observable_timing
    && PASSWORD
        .replace("1234", String.format("%04d", ImageServlet.PINCODE))
        .equals(password);
  return passwordCorrect
}

public boolean ok(String username) {
  boolean isAdmin = "admin".equals(username);
  return isAdmin;
}