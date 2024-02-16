# bearer:expected ruby_lang_weak_password_encryption_blowfish
Crypt::Blowfish.new("insecure").encrypt_block { |user|
  user.password
}

# bearer:expected ruby_lang_weak_password_encryption_blowfish
Crypt::Blowfish.new("insecure").encrypt_block do |user|
  user.password
end

