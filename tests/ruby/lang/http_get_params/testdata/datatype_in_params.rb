# bearer:expected ruby_lang_http_get_params
uri = URI("https://my.api.com/users/search?ethnic_origin=#{user.ethnic_origin}")

# bearer:expected ruby_lang_http_get_params
RestClient.get("https://my.api.com/users/search?first_name=#{user.first_name}")