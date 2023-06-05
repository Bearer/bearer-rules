OpenSSL::Digest.digest("sha1", user.password)

y = OpenSSL::Digest::SHA.new
y.digest(user.password)