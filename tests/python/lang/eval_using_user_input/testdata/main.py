import _xxsubinterpreters as subinterpreters

def bad(request):
  form = BadForm(request.POST)
  # bearer:expected python_lang_eval_using_user_input
  eval(form.cleaned_data["bad_eval"])

import sys
def bad2(interpreter_id: int = 0):
  unsafe = sys.argv[2]
  # bearer:expected python_lang_eval_using_user_input
  subinterpreters.run_string(interpreter_id, unsafe)

from sys import stdin
def bad3():
  code = stdin.readlines()
  # bearer:expected python_lang_eval_using_user_input
  return eval(code, {}, {"datetime": datetime, "timezone": timezone})

def ok():
  subinterpreters.run_string(interpreter_id, "print 'hello world'")