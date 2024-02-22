user = { email: "someone@example.com" }

# bearer:expected ruby_third_parties_elasticsearch
Elasticsearch::Client
  .new
  .update(index: 'books', id: 42, body: user)
