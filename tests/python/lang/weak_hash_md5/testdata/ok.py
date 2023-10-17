import hashlib

result = hashlib.sha256()
result.update('password')
result.digest()

result = hashlib.sha256(b'password')
result.digest()

username = user.name
result = hashlib.sha256(username.encode())
result.hexdigest()