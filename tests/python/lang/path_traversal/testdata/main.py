import os

def bad(dynamic_input):
  # bearer:expected python_lang_path_traversal
  os.mkdir(dynamic_input)

import os.path

# ok (sanitized)
def ok(dynamic_input):
  base_directory = "/app"
  dynanic_path = os.path.abspath(os.path.join(base_directory, dynamic_input))
  if dynanic_path.startswith(base_directory):
    with open(dynanic_path, 'r') as file:
      file.read()