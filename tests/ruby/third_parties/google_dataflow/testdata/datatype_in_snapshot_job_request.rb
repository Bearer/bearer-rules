req = Google::Cloud::Dataflow::V1beta3::SnapshotJobRequest.new
# bearer:expected ruby_third_parties_google_dataflow
req.description = "Current user: #{user.ip_address}"
