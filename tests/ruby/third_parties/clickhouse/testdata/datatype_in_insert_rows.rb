Clickhouse.connection.insert_rows(events, users: %w(id year user_id address)) do |rows|
  @customers.each do |customer|
# bearer:expected ruby_third_parties_clickhouse
    rows << [
      "123",
      2022,
      customer.email,
      customer.address
    ]
  end
end