from django.core.files.storage import FileSystemStorage as FSS

# bearer:expected python_django_path_traversal
fs = FSS(sys.argv[0])
request_file = request.FILES['document']
file = fs.save(request_file)

from django.core.files.storage import default_storage
import os.path

default_storage.save(os.path.normpath(sys.argv[1]))
x = os.path.normpath(sys.argv[2])
default_storage.save(x)
