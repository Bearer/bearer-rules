password = user.password

from Crypto.Cipher import ARC4

cipher = ARC4.new(key)

cipher.encrypt(password.encode())
# bearer:expected python_lang_weak_encryption_rc4
cipher.encrypt(text.encode())