password = user.password

from Crypto.Cipher import DES

cipher = DES.new(key, DES.MODE_ECB)

cipher.encrypt(password.encode())
# bearer:expected python_lang_weak_encryption_des
cipher.encrypt(text.encode())
