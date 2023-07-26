Digest::SHA1.hexdigest(user.password)

Digest::SHA1.new.update(user.password)
