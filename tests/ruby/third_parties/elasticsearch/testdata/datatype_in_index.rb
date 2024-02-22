client = Elasticsearch::Client.new(log: true)

user = { email: "someone@example.com" }
# bearer:expected ruby_third_parties_elasticsearch
client.index({ index: 'users', body: user })
