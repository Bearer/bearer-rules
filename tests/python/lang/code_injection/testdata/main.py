# Use bearer:expected python_lang_code_injection to flag expected findings
def bad(request):
  form = BadForm(request.POST)
  # bearer:expected python_lang_code_injection
  exec(form.cleaned_data["some_code"])
  
def bad2():
  username = input("what hack today?")
  # bearer:expected python_lang_code_injection
  setattr(current_user, "name", username)
  
def bad3(request):
  unsafe = request.GET.get("some_code")
  # bearer:expected python_lang_code_injection
  os.execl("/bin/bash", "/bin/bash", "-c", unsafe)