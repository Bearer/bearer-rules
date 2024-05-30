# Use bearer:expected python_lang_weak_password_hash_dss to flag expected findings
import hashlib

# bearer:expected python_lang_weak_password_hash_dss
result = hashlib.new('DSS', user.password, False)
# bearer:expected python_lang_weak_password_hash_dss
result.update(user.password)

# ok (not a password)
result = hashlib.new('DSS', user.name, False)
