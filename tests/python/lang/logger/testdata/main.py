import logging
myLogger = logging.getLogger(__name__)

def bad(user):
  # bearer:expected python_lang_logger
  myLogger.info(f"User '{user.email}' logged")

def bad2(user):
  # bearer:expected python_lang_logger
  myLogger.debug(f"Some debug info about '{user.email}'")

import logging as something_else

def bad3(user):
  myOtherLogger = something_else.getLogger(__name__)
  # bearer:expected python_lang_logger
  myOtherLogger.debug(f"User '{user.email}' logged")
