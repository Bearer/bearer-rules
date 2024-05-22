import re
import re2 as some_regex
import regex
from sre_parse import parse as my_sre_parse

def bad():
  user_regex = input("enter pattern:")

  pattern = fr"^\w{user_regex}$"
  # bearer:expected python_lang_regex_using_user_input
  re.compile(pattern).match("hello world")
  
  pattern2 = r"^\w+" + user_regex + r"$"
  # bearer:expected python_lang_regex_using_user_input
  some_regex.match(pattern2, "hello world")
  
  pattern3 = r"^\w{0}$".format(user_regex)
  # bearer:expected python_lang_regex_using_user_input
  regex.compile(pattern3).match("hello world")
  
  # bearer:expected python_lang_regex_using_user_input
  my_sre_parse(pattern3).dump()
  
def ok():
  user_regex = input("enter pattern: ")
  user_string = input("enter string: ")
  
  pattern = r"^\w+" + re.escape(user_regex) + r"$"
  pattern2 = fr"^\w{re.escape(user_regex)}$"
  pattern3 = r"^\w{}$".format(re.escape(user_regex))
  
  re.compile(pattern).match("hello world")
  regex.match(pattern2, user_string)
  
  some_regex.compile(pattern3).match("hello world")
  
  my_sre_parse(pattern3).dump()