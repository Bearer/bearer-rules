OpenSSL::PKey::RSA.new(File.read('rsa.pem')).private_encrypt("test")

# bearer:expected ruby_lang_weak_encryption_rsa
OpenSSL::PKey::RSA.new(512).to_pem(cipher, "hello world") # insecure