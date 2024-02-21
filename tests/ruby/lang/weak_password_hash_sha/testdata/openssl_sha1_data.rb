# bearer:expected ruby_lang_weak_password_hash_sha
OpenSSL::Digest.digest("sha1", user.password)

y = OpenSSL::Digest::SHA.new
# bearer:expected ruby_lang_weak_password_hash_sha
y.digest(user.password)