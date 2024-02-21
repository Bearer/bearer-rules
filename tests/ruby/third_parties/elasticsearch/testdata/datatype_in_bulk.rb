client = Elasticsearch::Client.new(log: true)

user = { email: "someone@example.com" }

body = [
  { index: { _index: 'users', _id: '42' } },
  user
]

# bearer:expected ruby_third_parties_elasticsearch
client.bulk(body: body)
