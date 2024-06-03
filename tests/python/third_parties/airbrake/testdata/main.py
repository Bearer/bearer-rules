import pybrake

notifier = pybrake.Notifier()

# bearer:expected python_third_parties_airbrake
notifier.notify(user.email)
# bearer:expected python_third_parties_airbrake
notice = notifier.notify_sync(user.email)

notice = notifier.build_notice()
# bearer:expected python_third_parties_airbrake
notice['params']['my_param'] = user.email

# ok
notice['params']['my_param'] = user.uuid
notice['params']['my_param'] = "some safe param"
