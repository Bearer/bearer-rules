from django.core.files.storage import FileSystemStorage as FSS

def bad(dynamic_input):
  # bearer:expected python_django_path_traversal
  fs = FSS(dynamic_input)
  request_file = request.FILES['document']
  file = fs.save(request_file)

from django.core.files.storage import default_storage
import os.path
def ok(dynamic_input):
  default_storage.save(os.path.normpath(dynamic_input))
  x = os.path.normpath(dynamic_input)
  default_storage.save(x)
