def bad():
  # bearer:expected python_django_insecure_cookie
  HttpResponse.set_cookie("foo", "bar", max_age=None, secure=False, httponly=False)
  
def ok(): 
  HttpResponse.set_cookie("foo", "bar")
  # still bad but not for this rule
  HttpResponse.set_cookie("foo", "bar", max_age=None, secure=True, httponly=False)