from Crypto.Cipher import AES

cipher = AES.new(key, AES.MODE_EAX)
# bearer:expected python_lang_weak_encryption_ecb_mode
cipher = AES.new(key, AES.MODE_ECB)