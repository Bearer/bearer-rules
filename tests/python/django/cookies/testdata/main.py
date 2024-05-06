from django.shortcuts import render, HttpResponse

def bad(user):
  response = HttpResponse("Set User")
  # bearer:expected python_django_cookies
  response.set_cookie('user', user.email)
  
def bad2(customer):
  # bearer:expected python_django_cookies
  HttpResponse.set_cookie('logged customer', customer.email)
 
def ok(user)
  response = HttpResponse("Set User")
  response.set_signed_cookie('user', user.email) # still bad but not by this rule
