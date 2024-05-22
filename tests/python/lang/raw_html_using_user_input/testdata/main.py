from html_sanitizer import Sanitizer

user_input = input()

def bad():
    1+1
    # bearer:expected python_lang_raw_html_using_user_input
    html = f"<strong>{user_input}</strong>"

def ok():
    sanitizer = Sanitizer()
    sanitized_value = sanitizer.sanitize(user_input)

    html = f"<strong>{sanitized_value}</strong>"