# bearer:expected ruby_lang_manual_html_sanitization
sanitized_user_input = user.Input
  .gsub('<', '&lt;')
  .gsub('>', '&gt;')
html = "<strong>#{sanitized_user_input}</strong>"
