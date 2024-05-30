# Use bearer:expected python_django_permissive_allow_origin to flag expected findings

from django.http import HttpResponse

response = HttpResponse()
# bearer:expected python_django_permissive_allow_origin
response.headers['access-control-allow-origin'] = '*'

# bearer:expected python_django_permissive_allow_origin
HttpResponse(headers={"Access-Control-Allow-Origin": "*"})

# ok
response = HttpResponse()
response.headers['access-control-allow-origin'] = 'https://my-example-site.com'

HttpResponse(headers={"Access-Control-Allow-Origin": "https://my-example-site.com"