x = OpenSSL::Digest.new("dss")
# bearer:expected ruby_lang_weak_password_hash_dss
x.digest(customer.password)