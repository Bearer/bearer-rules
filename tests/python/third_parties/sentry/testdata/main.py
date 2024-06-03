from sentry_sdk import add_breadcrumb
# bearer:expected python_third_parties_sentry
add_breadcrumb(
    category='auth',
    message='Authenticated user %s' % user.email,
    level='info',
)

# bearer:expected python_third_parties_sentry
def before_breadcrumb(crumb):
  crumb['user'] = current_user.email
  return crumb

from sentry_sdk.scope import Scope
scope = Scope.get_current_scope()
# bearer:expected python_third_parties_sentry
scope.set_tag("pii", user.fullname)
# bearer:expected python_third_parties_sentry
scope.user = {"id": user.uuid, "email": user.email}

from sentry_sdk import set_user
# bearer:expected python_third_parties_sentry
set_user({"id": user.uuid, "email": user.email})

from sentry_sdk import set_tag
# bearer:expected python_third_parties_sentry
set_tag("current_user", user.email)

import sentry_sdk
# bearer:expected python_third_parties_sentry
sentry_sdk.set_context("user", {
  "name": user.fullname,
  "age": user.age,
})
# bearer:expected python_third_parties_sentry
sentry_sdk.set_tag("current_user", user.email)
# bearer:expected python_third_parties_sentry
sentry_sdk.set_user({"id": user.uuid, "email": user.email})
