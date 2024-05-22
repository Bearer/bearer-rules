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

# bearer:expected python_lang_weak_hash_sha1
result = hashlib.new('SHA1', user.name, False)
# bearer:expected python_lang_weak_hash_sha1
result.update(user.name)
