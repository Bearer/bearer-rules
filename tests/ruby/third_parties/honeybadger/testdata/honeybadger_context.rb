tags = "#{current_user.first_name},#{current_user.last_name}"

# bearer:expected ruby_third_parties_honeybadger
Honeybadger.context({
  tags: tags
})

# bearer:expected ruby_third_parties_honeybadger
Honeybadger.context({
  my_data: current_user.email
})