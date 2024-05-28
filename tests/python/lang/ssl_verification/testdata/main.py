import ssl
from urllib3 import HTTPSConnectionPool, PoolManager, ProxyManager

# bad - urllib3

# bearer:expected python_lang_ssl_verification
HTTPSConnectionPool("127.0.0.1", 45454, cert_reqs="CERT_NONE", timeout=10)
# bearer:expected python_lang_ssl_verification
PoolManager("127.0.0.1", cert_reqs=None, timeout=10)
# bearer:expected python_lang_ssl_verification
ProxyManager(cert_reqs=ssl.CERT_OPTIONAL)

import urllib3
# bearer:expected python_lang_ssl_verification
urllib3.connectionpool.connection_from_url("http://example.com", cert_reqs='CERT_NONE')
# bearer:expected python_lang_ssl_verification
urllib3.proxy_from_url("https://proxy.com", cert_reqs="NONE", maxsize=7)

from urllib3.util import create_urllib3_context
# bad - urllib3 context with cert verification disabled
ctx = create_urllib3_context()
ctx.load_default_certs()
# bearer:expected python_lang_ssl_verification
ctx.cert_reqs = ssl.CERT_NONE

ctx = create_urllib3_context(ssl_version=ssl.PROTOCOL_SSLv23)
# bearer:expected python_lang_ssl_verification
ctx.cert_reqs = ssl.CERT_NONE

# bearer:expected python_lang_ssl_verification
ctx = create_urllib3_context(cert_reqs="CERT_NONE")

# bad - requests module

import requests
# bearer:expected python_lang_ssl_verification
requests.get("https://example.com", verify=False)

session = requests.Session()
# bearer:expected python_lang_ssl_verification
session.verify = False

# bad - ssl context
context = ssl.SSLContext(ssl.PROTOCOL_TLSv1_2)
# bearer:expected python_lang_ssl_verification
context.verify_mode = ssl.CERT_NONE

# bad - ssl (legacy) wrap_socket

import socket
hostname = "www.example.com"
with socket.create_connection((hostname, 443)) as sock:
  # bearer:expected python_lang_ssl_verification
  ssl.wrap_socket(sock, server_hostname="www.example.com", cert_reqs=ssl.CERT_NONE)

# bad - ssl (legacy) _create_unverified_context

# bearer:expected python_lang_ssl_verification
ssl._create_unverified_context()


# ok

HTTPSConnectionPool("127.0.0.1", 45454, cert_reqs="CERT_REQUIRED", timeout=10)
HTTPSConnectionPool("127.0.0.1", 45454, timeout=10)

with socket.create_connection(("www.example.com", 443)) as sock:
  ssl.wrap_socket(sock, server_hostname="www.example.com")

requests.get("https://example.com", verify=True)
requests.get("https://example.com")

context = ssl.SSLContext(ssl.PROTOCOL_TLSv1_2)
context.verify_mode = ssl.CERT_REQUIRED
