Digest::SHA1.hexdigest("hello world")

Digest::SHA1.new.update("hello world")

y = OpenSSL::Digest::SHA.new
y.digest(current_user.email)
