private_key = ENV.fetch("PRIVATE_JWT_KEY")
# bearer:expected ruby_lang_jwt
JWT.encode({ user: current_user.email }, private_key, 'HS256', {})

# bearer:expected ruby_lang_jwt
JWT.encode({ user: current_user.email }, ENV["SECRET_KEY"])

# bearer:expected ruby_lang_jwt
JWT.encode({ user_name: user.name }, Rails.application.secret_key_base)
