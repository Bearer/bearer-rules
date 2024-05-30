from django.http import HttpResponse

response = HttpResponse()
# bearer:expected python_django_insecure_allow_origin
response.headers['access-control-allow-origin'] = request.GET["my_origin"]

# bearer:expected python_django_insecure_allow_origin
HttpResponse(headers={"Access-Control-Allow-Origin": request.GET["my_origin"]})