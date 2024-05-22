import hashlib

result = hashlib.md5()
# bearer:expected python_lang_weak_hash_md5
result.update('password')
result.digest()

# bearer:expected python_lang_weak_hash_md5
result = hashlib.md5(b'password')
result.digest()

username = user.name
# bearer:expected python_lang_weak_hash_md5
result = hashlib.md5(username.encode())
result.hexdigest()

# bearer:expected python_lang_weak_hash_md5
result = hashlib.new('MD4', user.name, False)
# bearer:expected python_lang_weak_hash_md5
result.update(user.name)
