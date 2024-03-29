bigquery = Google::Cloud::Bigquery.new(retries: 3)
dataset = bigquery.dataset("my_dataset")

user = { "first_name" => "someone" }
rows = [user]

# bearer:expected ruby_third_parties_bigquery
inserter = dataset.insert("my_table", rows) do |result|
  call
end
