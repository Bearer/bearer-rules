user = {
  first_name: "John",
	last_name: "Doe"
}
# bearer:expected ruby_lang_cookies
cookies[:login] = { value: user.to_json, expires: 1.hour, secure: true }