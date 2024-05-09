# bearer:expected python_django_path_using_user_input
fs = FileSystemStorage(form.cleaned_data["storage_path"])
request_file = request.FILES['document']
file = fs.save(request_file)

from django.core.files.storage import default_storage
# bearer:expected python_django_path_using_user_input
default_storage.save(form.cleaned_data["filepath"])