# bearer:expected ruby_third_parties_airbrake
Airbrake.notify(user.first_name)

# bearer:expected ruby_third_parties_airbrake
Airbrake.notify('App crashed!', {
  current_user: user.email
})

# bearer:expected ruby_third_parties_airbrake
Airbrake.notify('App crashed') do |notice|
  notice[:params][:email] = customer.email
end