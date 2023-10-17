import hashlib

result = hashlib.md5()
result.update('password')
result.digest()

result = hashlib.md5(b'password')
result.digest()

username = user.name
result = hashlib.md5(username.encode())
result.hexdigest()