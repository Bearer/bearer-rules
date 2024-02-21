blowfish = Crypt::Blowfish.new("insecure")
# bearer:expected ruby_lang_weak_encryption_blowfish
blowfish.encrypt_block do
  "hello world"
end

