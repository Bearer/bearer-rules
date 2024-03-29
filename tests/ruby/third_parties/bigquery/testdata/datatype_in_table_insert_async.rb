bigquery = Google::Cloud::Bigquery.new
dataset = bigquery.dataset("my_dataset")
table = dataset.table("my_table")

inserter = table.insert_async do |result|
  call
end

user = { "first_name" => "someone" }
rows = [user]
# bearer:expected ruby_third_parties_bigquery
inserter.insert(rows)
