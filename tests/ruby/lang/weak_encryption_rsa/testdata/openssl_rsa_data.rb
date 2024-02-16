OpenSSL::PKey::RSA.new(File.read('rsa.pem')).private_encrypt(user.email)

cipher = OpenSSL::Cipher.new('aes-128-cbc')
rsa_encrypt = OpenSSL::PKey::RSA.new(1024)
# bearer:expected ruby_lang_weak_encryption_rsa
rsa_encrypt.export(cipher, user.address)

# bearer:expected ruby_lang_weak_encryption_rsa
OpenSSL::PKey::RSA.new(1024).to_pem(cipher, user.first_name)