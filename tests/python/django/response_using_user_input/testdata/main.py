# this file is also testing the html sanitizer shared rule

from django.http import HttpResponse
from django.utils.http import escape, strip_tags

HttpResponse(escape(form.data["ok"]), "text/html")
HttpResponse(strip_tags(form.data["ok"]), "text/html")
# bearer:expected python_django_response_using_user_input
HttpResponse(form.data["oops"], "text/html")

response = HttpResponse()
# bearer:expected python_django_response_using_user_input
response.content = form.data["oops"]

# bearer:expected python_django_response_using_user_input
response.write(form.data["oops"])
# bearer:expected python_django_response_using_user_input
response.writelines([form.data["oops"]])