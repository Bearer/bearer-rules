sanitized_user_input = user.Input
  .gsub('<', '&lt;')
  .gsub('>', '&gt;')
html = "<strong>#{sanitized_user_input}</strong>"
