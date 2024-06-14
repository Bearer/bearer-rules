# Use bearer:expected python_django_permissive_allow_origin to flag expected findings

from django.http import HttpResponse, JsonResponse

response = HttpResponse()
# bearer:expected python_django_permissive_allow_origin
response.headers['access-control-allow-origin'] = '*'

# bearer:expected python_django_permissive_allow_origin
HttpResponse(headers={"Access-Control-Allow-Origin": "*"})

def bad(self, request, *args, **kwargs):
  auth_header = request.headers.get('Authorization')
  if auth_header:
    method, token = auth_header.split(' ', 1)
    if method != 'Bearer':
      # bearer:expected python_django_permissive_allow_origin
      return JsonResponse({
        "error": "invalid_request",
        "error_description": "Unknown authorization method"
        }, status=400, headers={
        'Access-Control-Allow-Origin': '*',
      })
    else:
      # bearer:expected python_django_permissive_allow_origin
      return HttpResponse(status=401, headers={
        'WWW-Authenticate': 'Bearer realm="example"',
        'Access-Control-Allow-Origin': '*',
      })

# ok
response = HttpResponse()
response.headers['access-control-allow-origin'] = 'https://my-example-site.com'

HttpResponse(headers={"Access-Control-Allow-Origin": "https://my-example-site.com"