import hashlib

result = hashlib.md5()
# bearer:expected python_lang_weak_password_encryption_md5
result.update(user.password)
result.digest()

# bearer:expected python_lang_weak_password_encryption_md5
result = hashlib.md5(user.password)
result.digest()

password = user.password
# bearer:expected python_lang_weak_password_encryption_md5
result = hashlib.md5(password.encode())
result.hexdigest()

from hashlib import md5
# bearer:expected python_lang_weak_password_encryption_md5
result = md5(password.encode()).hexdigest()