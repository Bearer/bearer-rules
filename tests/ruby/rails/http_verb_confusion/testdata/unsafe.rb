# bearer:expected ruby_rails_http_verb_confusion
if request.get?
else
  change_state
end

# bearer:expected ruby_rails_http_verb_confusion
change_state unless request.get?

# bearer:expected ruby_rails_http_verb_confusion
unless request.get?
  change_state
end
