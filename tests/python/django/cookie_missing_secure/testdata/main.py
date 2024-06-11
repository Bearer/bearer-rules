def bad(request):
  cookie = jwt.encode(payload, 'csrf_vulneribility', algorithm='HS256')
  # bearer:expected python_django_cookie_missing_secure
  response.set_cookie('auth_cookie', cookie)
  
def ok(request):
  cookie = jwt.encode(payload, 'csrf_vulneribility', algorithm='HS256')
  # ok
  response.set_cookie('auth_cookie', cookie, secure=True)