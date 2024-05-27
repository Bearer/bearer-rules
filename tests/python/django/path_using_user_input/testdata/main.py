from django.core.files.storage import FileSystemStorage as FSS

# bearer:expected python_django_path_using_user_input
fs = FSS(location=form.cleaned_data["storage_path"])
request_file = request.FILES['document']
file = fs.save(request_file)

# bearer:expected python_django_path_using_user_input
fs = FSS(form.cleaned_data["storage_path"])

# bearer:expected python_django_path_using_user_input
fs = FSS("some/safe/location", form.cleaned_data["base_url"])

from django.core.files.storage import default_storage
# bearer:expected python_django_path_using_user_input
default_storage.save(location=form.cleaned_data["filepath"])