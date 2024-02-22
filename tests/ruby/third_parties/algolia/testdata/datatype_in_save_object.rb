client = Algolia::Search::Client.create('YourApplicationID', 'YourWriteAPIKey')
index = client.init_index("my_index")

# bearer:expected ruby_third_parties_algolia
index.save_object({ email: user.email }, { auto_generate_object_id_if_not_exist: true })

# bearer:expected ruby_third_parties_algolia
index.save_objects([{ email: user.email }], { auto_generate_object_id_if_not_exist: true })
