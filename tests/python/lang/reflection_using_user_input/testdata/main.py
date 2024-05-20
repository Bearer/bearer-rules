def bad(num1, num2):
  print("Enter the operation: add, subtract, multiply")
  operation = input()

  # bearer:expected python_lang_reflection_using_user_input
  result = globals()[operation](num1, num2)
  
  my_globals = globals()
  # bearer:expected python_lang_reflection_using_user_input
  my_globals[operation](num1, num2)

def bad2():
  user_action = input("what hack today? get_username or get_password")
  # bearer:expected python_lang_reflection_using_user_input
  getattr(current_user, user_action)

import importlib

def bad3():
  user_module = input("which bad module to import today?")
  # bearer:expected python_lang_reflection_using_user_input
  __import__(user_module)

  # bearer:expected python_lang_reflection_using_user_input
  importlib.import_module(user_module)

def ok(num1, num2):
  result = globals()["hard_coded_operation"](num1, num2)
  getattr(current_user, "known_action")
  __import__("safe_module")
  importlib.import_module("safe_module")