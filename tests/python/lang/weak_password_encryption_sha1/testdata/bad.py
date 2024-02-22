import hashlib

result = hashlib.sha1()
# bearer:expected python_lang_weak_password_encryption_sha1
result.update(user.password)
result.digest()

# bearer:expected python_lang_weak_password_encryption_sha1
result = hashlib.sha1(user.password)
result.digest()

password = user.password
# bearer:expected python_lang_weak_password_encryption_sha1
result = hashlib.sha1(password.encode())
result.hexdigest()