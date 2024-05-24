from django.core.files.storage import FileSystemStorage

# bearer:expected python_django_file_permissions
fs = FileSystemStorage(location="my_file.txt", file_permissions_mode=0o777)

# ok
fs = FileSystemStorage(location="my_file.txt", file_permissions_mode=0o600)

# settings.py
# bearer:expected python_django_file_permissions
FILE_UPLOAD_PERMISSIONS = 0o777

# ok
FILE_UPLOAD_PERMISSIONS = 0o600