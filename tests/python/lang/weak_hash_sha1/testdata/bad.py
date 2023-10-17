import hashlib

result = hashlib.sha1()
result.update('password')
result.digest()

result = hashlib.sha1(b'password')
result.digest()

username = user.name
result = hashlib.sha1(username.encode())
result.hexdigest()