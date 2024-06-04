from honeybadger import honeybadger

# bearer:expected python_third_parties_honeybadger
honeybadger.set_context(current_ip_address=current_user.ip_address)

def bad():
  # bearer:expected python_third_parties_honeybadger
  with honeybadger.context(user_email=current_user.email):
    # do something
    
# bearer:expected python_third_parties_honeybadger
honeybadger.notify(MyException, context={ "user": current_user.email })

# bearer:expected python_third_parties_honeybadger
honeybadger.notify(error_class='MyError', error_message=f'Something bad happened to {current_user.email}!', fingerprint='custom_fingerprint')

# ok 
honeybadger.notify(MyException, context={ "user": current_user.uuid })