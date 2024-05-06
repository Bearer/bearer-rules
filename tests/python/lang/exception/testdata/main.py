def bad(user):
  if not user.logged_in:
    # bearer:expected python_lang_exception
    raise CustomError(f"User '{user.email}' is unauthorized")
    # bearer:expected python_lang_exception
    raise Exception(f"User '{user.email}' is unauthorized")

def ok(user)
  if not user.logged_in:
    raise CustomError(f"User '{user.uuid}' is unauthorized")
  