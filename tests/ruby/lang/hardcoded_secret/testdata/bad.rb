pw = "abc"
# bearer:expected ruby_lang_hardcoded_secret
PASSWORD = pw

# bearer:expected ruby_lang_hardcoded_secret
call(api_key: "oops")

# bearer:expected ruby_lang_hardcoded_secret
call("secret" => "oops")

# bearer:expected ruby_lang_hardcoded_secret
{ API_KEY: "oops" }

# bearer:expected ruby_lang_hardcoded_secret
{ "secret" => "oops" }
