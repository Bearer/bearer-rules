# pkg/commands/process/settings/rules/ruby/third_parties/google_dataflow/datatype_in_structured_message.rb

str_msg = Google::Cloud::Dataflow::V1beta3::StructuredMessage.new
# bearer:expected ruby_third_parties_google_dataflow
str_msg.message_text = "Current user: #{user.ip_address}"
