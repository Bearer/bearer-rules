Crypt::Blowfish.new("insecure").encrypt_block { |user|
  user.full_name
}

Crypt::Blowfish.new("insecure").encrypt_block do |user|
  user.full_name
end

Crypt::Blowfish.new("your-key").encrypt_string(user.email)
