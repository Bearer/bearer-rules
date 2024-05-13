def bad(user):
  if not user.logged_in:
    # bearer:expected python_lang_exception
    raise CustomError(f"User '{user.email}' is unauthorized")
    # bearer:expected python_lang_exception
    raise Exception(f"User '{user.email}' is unauthorized")
    
def bad2(user):
  try: 
    user.save()
  except Exception as e:
    # bearer:expected python_lang_exception
    raise BadUserException(f"User can't be saved: " + user.email) from e

def ok(user)
  if not user.logged_in:
    raise CustomError(f"User '{user.uuid}' is unauthorized")
  