cipher = OpenSSL::Cipher.new('aes-128-cbc')
dsa_encrypt = OpenSSL::PKey::DSA.new(1024)
dsa_encrypt.export(cipher, user.password)

OpenSSL::PKey::DSA.new(1024).to_pem(cipher, user.password)