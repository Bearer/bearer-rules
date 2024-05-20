from django.conf import settings

# bearer:expected python_django_debug_mode_enabled
DEBUG = True

def bad():
  # bearer:expected python_django_debug_mode_enabled
  settings.configure(DEBUG=True)

DEBUG = False

def ok():
  settings.configure(DEBUG=False)