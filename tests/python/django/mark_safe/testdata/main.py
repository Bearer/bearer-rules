from django.utils.safestring import mark_safe
from django.utils.html import format_html

def bad():
  # bearer:expected python_django_mark_safe
  return mark_safe("some HTML string")

def ok(some_var):
  return format_html(
    "{} <b>{}</b> {}",
    mark_safe("some HTML string"),
    some_var
  )