Digest::SHA1.hexdigest(user.first_name)

Digest::SHA1.new.update(user.first_name)
