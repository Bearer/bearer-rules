# https://cloud.google.com/ruby/docs/reference/google-cloud-dataflow-v1beta3/latest/Google-Cloud-Dataflow-V1beta3-TemplatesService-Client

templates_client = Google::Cloud::Dataflow::V2::TemplatesService::Client.new
templates_client = Google::Cloud::Dataflow.templates_service
# bearer:expected ruby_third_parties_google_dataflow
templates_client.create_job_from_template(project_id: "123", job_name: "my-job", parameters: { current_user: user.email })