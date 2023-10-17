import hashlib

result = hashlib.sha256()
result.update(user.password)
result.digest()

result = hashlib.sha256(user.password)
result.digest()

password = user.password
result = hashlib.sha256(password.encode())
result.hexdigest()