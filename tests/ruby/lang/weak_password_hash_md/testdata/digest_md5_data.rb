# bearer:expected ruby_lang_weak_password_hash_md
Digest::MD5.hexdigest(user.password)

# bearer:expected ruby_lang_weak_password_hash_md
Digest::MD5.new << user.password
