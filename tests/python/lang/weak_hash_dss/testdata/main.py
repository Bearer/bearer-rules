import hashlib

# bearer:expected python_lang_weak_hash_dss
result = hashlib.new('DSS', user.name, False)
# bearer:expected python_lang_weak_hash_dss
result.update(user.name)
