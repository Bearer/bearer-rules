# bearer:expected ruby_lang_eval_using_user_input
RubyVM::InstructionSequence.compile(request.env["oops"])

# bearer:expected ruby_lang_eval_using_user_input
a.eval(request.env["oops"], "test")

# bearer:expected ruby_lang_eval_using_user_input
a.instance_eval(request.env["oops"])

# bearer:expected ruby_lang_eval_using_user_input
a.class_eval(request.env["oops"])

# bearer:expected ruby_lang_eval_using_user_input
a.module_eval(request.env["oops"])

# bearer:expected ruby_lang_eval_using_user_input
eval(request.env["oops"])

# bearer:expected ruby_lang_eval_using_user_input
instance_eval(request.env["oops"], "test")

# bearer:expected ruby_lang_eval_using_user_input
class_eval(request.env["oops"])

# bearer:expected ruby_lang_eval_using_user_input
module_eval(request.env["oops"])
