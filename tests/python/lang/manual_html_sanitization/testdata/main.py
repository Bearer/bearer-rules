from html_sanitizer import Sanitizer

user_input = input()

def bad():
    # bearer:expected python_lang_manual_html_sanitization
    sanitized_value = user_input.replace('<', '&lt;')
    # bearer:expected python_lang_manual_html_sanitization
    sanitized_value = sanitized_value.replace('>', '&gt;')
    
    html = f"<strong>{sanitized_value}</strong>"

def ok():
    sanitizer = Sanitizer()
    sanitized_value = sanitizer.sanitize(user_input)

    html = f"<strong>{sanitized_value}</strong>"