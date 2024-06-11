def bad(request):
  log_code = request.POST.get('log_code')
  log_filename = os.path.join(dirname, "my-log-code.py")
  f = open(log_filename,"w")
  # bearer:expected python_django_crlf_injection
  f.write(log_code)
  f.close()
  
def ok(request):
  log_code = request.POST.get('log_code')
  log_filename = os.path.join(dirname, "my-log-code.py")
  f = open(log_filename,"w")
  # ok
  f.write(log_code.strip())
  # ok
  f.write(log_code.strip("\r\n"))
  f.close()