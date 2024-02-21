# bearer:expected ruby_lang_eval_using_user_input
RubyVM::InstructionSequence.compile(params["oops"])

# bearer:expected ruby_lang_eval_using_user_input
a.eval(params["oops"], "test")

# bearer:expected ruby_lang_eval_using_user_input
a.instance_eval(params["oops"])

# bearer:expected ruby_lang_eval_using_user_input
a.class_eval(params["oops"])

# bearer:expected ruby_lang_eval_using_user_input
a.module_eval(params["oops"])

# bearer:expected ruby_lang_eval_using_user_input
eval(params["oops"])

# bearer:expected ruby_lang_eval_using_user_input
instance_eval(params["oops"], "test")

# bearer:expected ruby_lang_eval_using_user_input
class_eval(params["oops"])

# bearer:expected ruby_lang_eval_using_user_input
module_eval(params["oops"])
