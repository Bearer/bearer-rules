OpenSSL::Digest.digest("sha1", "hello world")
OpenSSL::Digest::MD5.digest("hello world")

x = OpenSSL::Digest.new("dss")
x.digest("hello world")

y = OpenSSL::Digest::SHA.new
y.digest("hello world")
