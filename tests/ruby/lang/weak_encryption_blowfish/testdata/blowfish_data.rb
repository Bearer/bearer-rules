# bearer:expected ruby_lang_weak_encryption_blowfish
Crypt::Blowfish.new("insecure").encrypt_block { |user|
  user.full_name
}

# bearer:expected ruby_lang_weak_encryption_blowfish
Crypt::Blowfish.new("insecure").encrypt_block do |user|
  user.full_name
end

# bearer:expected ruby_lang_weak_encryption_blowfish
Crypt::Blowfish.new("your-key").encrypt_string(user.email)
