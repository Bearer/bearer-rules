import hashlib

result = hashlib.sha1()
# bearer:expected python_lang_weak_hash_sha1
result.update('password')
result.digest()

# bearer:expected python_lang_weak_hash_sha1
result = hashlib.sha1(b'password')
result.digest()

username = user.name
# bearer:expected python_lang_weak_hash_sha1
result = hashlib.sha1(username.encode())
result.hexdigest()