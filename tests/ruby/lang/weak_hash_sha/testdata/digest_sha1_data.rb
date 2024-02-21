# bearer:expected ruby_lang_weak_hash_sha
Digest::SHA1.hexdigest(user.first_name)

# bearer:expected ruby_lang_weak_hash_sha
Digest::SHA1.new.update(user.first_name)
