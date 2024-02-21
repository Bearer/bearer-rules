def handler(event:, context:)
# bearer:expected ruby_lang_eval_using_user_input
  RubyVM::InstructionSequence.compile(event["oops"])

# bearer:expected ruby_lang_eval_using_user_input
  a.eval(event["oops"], "test")

# bearer:expected ruby_lang_eval_using_user_input
  a.instance_eval(event["oops"])

# bearer:expected ruby_lang_eval_using_user_input
  a.class_eval(event["oops"])

# bearer:expected ruby_lang_eval_using_user_input
  a.module_eval(event["oops"])

# bearer:expected ruby_lang_eval_using_user_input
  eval(event["oops"])

# bearer:expected ruby_lang_eval_using_user_input
  instance_eval(event["oops"], "test")

# bearer:expected ruby_lang_eval_using_user_input
  class_eval(event["oops"])

# bearer:expected ruby_lang_eval_using_user_input
  module_eval(event["oops"])
end
