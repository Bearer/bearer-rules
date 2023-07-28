Digest::MD5.hexdigest(user.password)

Digest::MD5.new << user.password
