# Use bearer:expected python_third_parties_algolia to flag expected findings
from algoliasearch.search_client import SearchClient

client = SearchClient.create('YourApplicationID', 'YourWriteAPIKey')
index = client.init_index('your_index_name')

# bearer:expected python_third_parties_algolia
index.save_object({
    'firstname': user.firstname,
    'lastname': user.lastname,
    'objectID': user.uuid
})
# bearer:expected python_third_parties_algolia
res = index.save_objects([{'firstname': user.firstname, 'lastname': user.lastname, 'objectID': user.uuid}])

# bearer:expected python_third_parties_algolia
index.partial_update_object({"objectID": user.uuid, "email": user.email})
# bearer:expected python_third_parties_algolia
index.partial_update_objects([
    {'objectID': user1.uuid, 'firstname': user1.firstname},
    {'objectID': user1.uuid, 'firstname': user2.firstname}
])

# bearer:expected python_third_parties_algolia
index.replace_all_objects(
  [{'firstname': user.firstname, 'lastname': user.lastname, 'objectID': user.uuid}], 
  { 'safe': True }
)

# ok 
index.save_object({ 'objectID': user.uuid })