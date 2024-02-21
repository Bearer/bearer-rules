# bearer:expected ruby_lang_weak_hash_sha
OpenSSL::Digest.digest("sha1", user.first_name)

y = OpenSSL::Digest::SHA.new
# bearer:expected ruby_lang_weak_hash_sha
y.digest(user.first_name)