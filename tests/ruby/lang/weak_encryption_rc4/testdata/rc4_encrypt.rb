# bearer:expected ruby_lang_weak_encryption_rc4
RC4.new("insecure").encrypt("hello world")

rc4_encrypt = RC4.new("insecure")
# bearer:expected ruby_lang_weak_encryption_rc4
rc4_encrypt.encrypt!("hello world")
