from argon2 import PasswordHasher
from argon2.low_level import Type

ph = PasswordHasher(type=Type.I)
# bearer:expected python_lang_weak_password_hash_argon2
hash = ph.hash(current_user.password)

# ok
# argon2id used
ph = PasswordHasher(type=Type.ID)
hash = ph.hash(current_user.password)

ph = PasswordHasher() # default is argon2id
hash = ph.hash(current_user.password)

ph = PasswordHasher(type=Type.I)
# not a password
hash = ph.hash(current_user.email)