y = OpenSSL::Digest::SHA.new
# bearer:expected ruby_lang_weak_hash_sha
y.digest("hello world")