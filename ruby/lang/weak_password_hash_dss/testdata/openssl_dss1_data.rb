x = OpenSSL::Digest.new("dss")
x.digest(customer.password)