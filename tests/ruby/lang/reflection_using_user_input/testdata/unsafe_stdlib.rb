# bearer:expected ruby_lang_reflection_using_user_input
Object.const_get(params[:class])
# bearer:expected ruby_lang_reflection_using_user_input
Object.const_set(params[:class], 42)
# bearer:expected ruby_lang_reflection_using_user_input
Object.remove_const(params[:class])

# bearer:expected ruby_lang_reflection_using_user_input
method(params[:method])

# bearer:expected ruby_lang_reflection_using_user_input
x.define_method(params[:method]) {}

# bearer:expected ruby_lang_reflection_using_user_input
params[:method].to_sym.to_proc

# bearer:expected ruby_lang_reflection_using_user_input
bad_things(&params[:method].to_sym)
# bearer:expected ruby_lang_reflection_using_user_input
x.bad_things(&params[:method].to_sym)
