RC4.new("insecure").encrypt("hello world")

rc4_encrypt = RC4.new("insecure")
rc4_encrypt.encrypt!(user.first_name)
