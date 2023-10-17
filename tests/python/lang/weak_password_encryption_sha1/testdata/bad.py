import hashlib

result = hashlib.sha1()
result.update(user.password)
result.digest()

result = hashlib.sha1(user.password)
result.digest()

password = user.password
result = hashlib.sha1(password.encode())
result.hexdigest()