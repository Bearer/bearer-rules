from http.cookies import BaseCookie

cookie = BaseCookie()

cookie['session_id'] = 'abc123'
# bearer:expected python_lang_insecure_cookie
cookie['session_id']['secure'] = False