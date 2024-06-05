from django.views.decorators.csrf import csrf_exempt

# bearer:expected python_django_csrf_protection_disabled
@csrf_exempt
def my_unsafe_route():
  # some route
 
def my_safe_route():
  # some safe route