OpenSSL::PKey::RSA.new(File.read('rsa.pem')).private_encrypt("test")

OpenSSL::PKey::RSA.new(512).to_pem(cipher, "hello world") # insecure