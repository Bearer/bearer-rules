users = [current_user.email]
# bearer:expected ruby_third_parties_airbrake
Airbrake.merge_context(users: users)