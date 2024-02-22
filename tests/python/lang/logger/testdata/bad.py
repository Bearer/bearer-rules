import logging

def do_something(user):
  user.email

def authenticate(user):
  do_something()
# bearer:expected python_lang_logger
  logging.info(f"User '{user.email}' logged")