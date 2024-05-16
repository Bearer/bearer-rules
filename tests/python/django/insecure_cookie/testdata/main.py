from django.http import HttpResponse

def bad():
  response = HttpResponse()
  # bearer:expected python_django_insecure_cookie
  response.set_cookie("foo", "bar", max_age=None, secure=False, httponly=False)
  
def ok(): 
  response = HttpResponse()
  
  response.set_cookie("foo", "bar")
  # still bad but not for this rule
  response.set_cookie("foo", "bar", max_age=None, secure=True, httponly=False)