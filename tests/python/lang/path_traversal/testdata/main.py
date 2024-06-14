import os

def bad(dynamic_input):
  # bearer:expected python_lang_path_traversal
  os.mkdir(dynamic_input)

import os.path

# ok (sanitized)
def ok(dynamic_input):
  normalized = os.path.normpath(dynamic_input)
  os.mkdir(normalized)