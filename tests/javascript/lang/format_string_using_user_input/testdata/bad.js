// bearer:expected javascript_lang_format_string_using_user_input
console.error(`Value: ${req.params.value}`, e)

// bearer:expected javascript_lang_format_string_using_user_input
util.format(`Value: ${req.params.value}`)

// bearer:expected javascript_lang_format_string_using_user_input
util.formatWithOptions({}, `Value: ${req.params.value} %s`, x)
