package crypto;

import java.security.MessageDigest;

// bearer:expected java_lang_custom_message_digest_class
public class CustomMessageDigest extends MessageDigest {
  // some custom implementation process
}

// bearer:expected java_lang_custom_message_digest_class
class MyOtherCustomMessageDigest extends java.security.MessageDigest {
  // some custom implementation process
}
