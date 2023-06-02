Digest::MD5.hexdigest(user.address)

Digest::MD5.new << user.address
