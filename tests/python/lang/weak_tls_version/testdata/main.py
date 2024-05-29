import ssl

context = ssl.create_default_context(ssl.Purpose.CLIENT_AUTH)

context.minimum_version = ssl.TLSVersion.TLSv1_3
# bearer:expected python_lang_weak_tls_version
context.minimum_version = ssl.TLSVersion.TLSv1_1

context.maximum_version = ssl.TLSVersion.TLSv1_3
# bearer:expected python_lang_weak_tls_version
context.maximum_version = ssl.TLSVersion.SSLv3

context2 = ssl.SSLContext(ssl.PROTOCOL_TLS_CLIENT)
# bearer:expected python_lang_weak_tls_version
context2 = ssl.SSLContext(ssl.PROTOCOL_TLSv1_1)