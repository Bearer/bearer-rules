import hashlib

result = hashlib.md5()
result.update(user.password)
result.digest()

result = hashlib.md5(user.password)
result.digest()

password = user.password
result = hashlib.md5(password.encode())
result.hexdigest()