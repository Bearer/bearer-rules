from pymongo import MongoClient

def bad(request):
  user_input = request.GET.get('user_data')
  
  client = MongoClient('mongodb://localhost:27017/')
  db = client['my_db']
  collection = db['customers']
  # bearer:expected python_lang_nosql_injection
  collection.find_one({ "username": user_input })
  
  collection = db.customers
  # bearer:expected python_lang_nosql_injection
  collection.find_one({ "username": user_input })
  
  query = '{ "username": "' + user_input + '" }'
  # bearer:expected python_lang_nosql_injection
  customer = collection.find_one(query)
    
  query = json.loads('{ "username": "' + user_input + '" }')
  # bearer:expected python_lang_nosql_injection
  customer = collection.find_one(query)
  
  # bearer:expected python_lang_nosql_injection
  collection.find_one( { "cart_total": request.GET.get('total') } )
  
  
from bson import ObjectId
from bson.decimal128 import Decimal128

def ok(request):
  user_input = request.GET.get('username')
    
  client = MongoClient('mongodb://localhost:27017/')
  db = client['my_db']
  collection = db['customers']
  collection.find_one( { "username": str(user_input) } )
  
  collection.find_one( { "uuid": ObjectId(user_uuid) } )
  collection.find_one( { "cart_total": Decimal128(request.GET.get('total')) } )

