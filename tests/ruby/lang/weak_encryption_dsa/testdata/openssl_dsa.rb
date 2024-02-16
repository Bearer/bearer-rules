cipher = OpenSSL::Cipher.new('aes-128-cbc')
dsa_encrypt = OpenSSL::PKey::DSA.new(1024)
# bearer:expected ruby_lang_weak_encryption_dsa
dsa_encrypt.export(cipher, "hello world")

# bearer:expected ruby_lang_weak_encryption_dsa
OpenSSL::PKey::DSA.new(1024).to_pem(cipher, "hello world")