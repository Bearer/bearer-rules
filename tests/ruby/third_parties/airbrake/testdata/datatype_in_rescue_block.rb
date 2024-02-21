begin
  1/0
rescue ZeroDivisionError => ex
# bearer:expected ruby_third_parties_airbrake
  response = Airbrake.notify_sync(current_user.first_name)
end