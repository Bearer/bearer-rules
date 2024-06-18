# Use bearer:expected python_lang_code_injection to flag expected findings
def bad(request):
  form = BadForm(request.POST)
  # bearer:expected python_lang_code_injection
  exec(form.cleaned_data["some_code"])
  
def bad2():
  username = input("what hack today?")
  # bearer:expected python_lang_code_injection
  setattr(current_user, "name", username)

import os
def bad3(request):
  unsafe = request.GET.get("some_code")
  # bearer:expected python_lang_code_injection
  os.execl("/bin/bash", "/bin/bash", "-c", unsafe)
  
import sys
def bad4():
  hook_name = sys.argv[1]
  if hook_name not in HOOK_NAMES:
    sys.exit("Unknown hook: %s" % hook_name)
  
  # bearer:expected python_lang_code_injection
  hook = globals()[hook_name]

from importlib import import_module
def bad4(request):
  # bearer:expected python_lang_code_injection
  module1 = __import__("user.commands.%s" % (request.GET.get("module1")))
  # bearer:expected python_lang_code_injection
  module = import_module("user.commands.%s" % (request.GET.get("module_name")))
  return  module.Command()