from django.shortcuts import render
from django.http import HttpResponse

def bad(user):
  response = HttpResponse()
  # bearer:expected python_django_cookies
  response.set_cookie('user', user.email)
  
def bad2(customer):
  resp = HttpResponse("Set User")
  # bearer:expected python_django_cookies
  resp.set_cookie('logged customer', customer.email)
 
def ok(user)
  response = HttpResponse("Set User")
  response.set_signed_cookie('user', user.email) # still bad but not by this rule
