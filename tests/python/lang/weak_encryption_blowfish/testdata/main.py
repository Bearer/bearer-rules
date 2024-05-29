password = user.password

from Crypto.Cipher import Blowfish

cipher = Blowfish.new(key, Blowfish.MODE_CBC)
cipher.encrypt(password.encode())
# bearer:expected python_lang_weak_encryption_blowfish
cipher.encrypt(text.encode())