# bearer:expected ruby_lang_weak_password_hash_sha
Digest::SHA1.hexdigest(user.password)

# bearer:expected ruby_lang_weak_password_hash_sha
Digest::SHA1.new.update(user.password)
