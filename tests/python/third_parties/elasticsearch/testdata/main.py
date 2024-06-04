from elasticsearch import Elasticsearch

client = Elasticsearch("https://...", api_key="my_api_key")

# bearer:expected python_third_parties_elasticsearch
client.update(index="my_index", id="my_doc_id", doc={
  "name": user.fullname,
  "email": user.email
})

# bearer:expected python_third_parties_elasticsearch
client.update("my_index","my_doc_id", { 
  "name": user.fullname, 
  "email": user.email 
})

# bearer:expected python_third_parties_elasticsearch
client.index(index="my_index", id="my_doc_id", doc={
  "name": user.fullname,
  "email": user.email
})


# ok
client.index(index="my_index", id="my_doc_id", doc={
  "user": user.uuid
})