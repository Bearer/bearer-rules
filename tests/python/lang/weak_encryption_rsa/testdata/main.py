password = user.password

from Crypto.Cipher import PKCS1_OAEP
from Crypto.PublicKey import RSA

weak_key = RSA.generate(1048)
strong_key = RSA.generate(2048)

weak_cipher = PKCS1_OAEP.new(weak_key)
strong_cipher = PKCS1_OAEP.new(strong_key)

strong_cipher.encrypt(text.encode())
weak_cipher.encrypt(password.encode())
# bearer:expected python_lang_weak_encryption_rsa
weak_cipher.encrypt(text.encode())
