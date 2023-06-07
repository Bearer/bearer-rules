Digest::MD5.hexdigest("hello world")

Digest::MD5.new << "hello world"

OpenSSL::Digest::MD5.digest(current_user.email)
