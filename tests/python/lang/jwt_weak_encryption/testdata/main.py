import jwt

jwt.encode(payload, secret, "HS256")
# bearer:expected python_lang_jwt_weak_encryption
jwt.encode(payload, secret, "none")
# bearer:expected python_lang_jwt_weak_encryption
jwt.encode(payload, secret, None)

jwt.encode(payload, secret, algorithm="HS256")
# bearer:expected python_lang_jwt_weak_encryption
jwt.encode(payload, secret, algorithm="none")
# bearer:expected python_lang_jwt_weak_encryption
jwt.encode(payload, secret, algorithm=None)