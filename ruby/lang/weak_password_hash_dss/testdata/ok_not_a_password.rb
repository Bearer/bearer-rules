x = OpenSSL::Digest.new("dss")
x.digest("hello world")
x.digest(user.first_name)