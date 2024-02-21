x = OpenSSL::Digest.new("dss")
# bearer:expected ruby_lang_weak_hash_dss
x.digest("hello world")