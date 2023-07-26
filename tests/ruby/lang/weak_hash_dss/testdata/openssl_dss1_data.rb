x = OpenSSL::Digest.new("dss")
x.digest(user.first_name)