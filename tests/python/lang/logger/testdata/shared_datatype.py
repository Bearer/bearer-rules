# tests for python_shared_lang_datatype

import logging

user = { "email": "foo@example.com" }

logging.info(user.uuid)
logging.info(user["uuid"])
