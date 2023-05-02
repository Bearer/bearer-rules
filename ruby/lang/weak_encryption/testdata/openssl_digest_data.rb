OpenSSL::Digest.digest("sha1", user.first_name)
OpenSSL::Digest::MD5.digest(user.first_name)

x = OpenSSL::Digest.new("dss")
x.digest(user.first_name)

y = OpenSSL::Digest::SHA.new
y.digest(user.first_name)
