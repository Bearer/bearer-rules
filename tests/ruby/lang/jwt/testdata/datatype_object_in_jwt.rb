payload = {
	user: {
		email: user.email
	}
}
# bearer:expected ruby_lang_jwt
JWT.encode(payload, ENV.fetch("SECRET_KEY"))
