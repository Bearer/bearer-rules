blowfish = Crypt::Blowfish.new("insecure")
blowfish.encrypt_block do
  "hello #{current_user.full_name}"
end

