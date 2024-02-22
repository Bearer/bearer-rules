custom_metadata = Google::Cloud::Dataflow::V1beta3::ParameterMetadata::CustomMetadataEntry.new
# bearer:expected ruby_third_parties_google_dataflow
custom_metadata.value = "ip: #{customer.ip_address}"

template_metadata = Google::Cloud::Dataflow::V1beta3::TemplateMetadata.new
# bearer:expected ruby_third_parties_google_dataflow
template_metadata.description ="ip: #{customer.ip_address}"
# bearer:expected ruby_third_parties_google_dataflow
template_metadata.name ="ip: #{customer.ip_address}"
