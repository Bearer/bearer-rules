blowfish = Crypt::Blowfish.new("insecure")
blowfish.encrypt_block do
  "hello #{current_user.full_name}"
end

Crypt::Blowfish.new("your-key").encrypt_string(user.email)