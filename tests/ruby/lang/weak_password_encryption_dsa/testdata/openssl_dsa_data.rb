cipher = OpenSSL::Cipher.new('aes-128-cbc')
dsa_encrypt = OpenSSL::PKey::DSA.new(1024)
# bearer:expected ruby_lang_weak_password_encryption_dsa
dsa_encrypt.export(cipher, user.password)

# bearer:expected ruby_lang_weak_password_encryption_dsa
OpenSSL::PKey::DSA.new(1024).to_pem(cipher, user.password)