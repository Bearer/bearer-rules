from http import cookies

def bad(user):
  myCookie = cookies.SimpleCookie()
  # bearer:expected python_lang_cookies
  myCookie["user"] = user.email
  
def bad2(customer):
  myBasicCookie = http.cookies.BaseCookie()
  # bearer:expected python_lang_cookies
  myBasicCookie["logged customer"] = customer.email
 
def ok(user):
  safeCookie = cookies.SimpleCookie()
  safeCookie["user"] = "current"
  
