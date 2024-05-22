user_input = form.cleaned_data["path"]

from django.shortcuts import redirect

redirect("ok", False)
# bearer:expected python_django_open_redirect
redirect(user_input, False)


from django.http import HttpResponsePermanentRedirect, HttpResponseRedirect

HttpResponseRedirect("ok", headers={})
# bearer:expected python_django_open_redirect
HttpResponseRedirect(user_input, headers={})

HttpResponsePermanentRedirect("ok", headers={})
# bearer:expected python_django_open_redirect
HttpResponsePermanentRedirect(user_input, headers={})