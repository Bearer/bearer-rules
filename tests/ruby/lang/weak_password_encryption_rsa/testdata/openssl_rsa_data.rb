OpenSSL::PKey::RSA.new(File.read('rsa.pem')).private_encrypt(user.password)

cipher = OpenSSL::Cipher.new('aes-128-cbc')
rsa_encrypt = OpenSSL::PKey::RSA.new(1024)
# bearer:expected ruby_lang_weak_password_encryption_rsa
rsa_encrypt.export(cipher, user.password)

# bearer:expected ruby_lang_weak_password_encryption_rsa
OpenSSL::PKey::RSA.new(1024).to_pem(cipher, current_user.password)