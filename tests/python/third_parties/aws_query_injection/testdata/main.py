import boto3

DYNAMODB = 'dynamodb'
# dynamo db
def bad(event, context):
  dynamodb = boto3.resource(DYNAMODB, '')
  users_table = dynamodb.Table('users')
  
  # bearer:expected python_third_parties_aws_query_injection
  users_table.query(
    Select = 'ALL_ATTRIBUTES', 
    FilterExpression = event.body.filter
  )
  
  # bearer:expected python_third_parties_aws_query_injection
  users_table.scan(
    Select = 'ALL_ATTRIBUTES', 
    FilterExpression = event.body.filter
  )
  
  dynamodb = boto3.client('dynamodb')
  # bearer:expected python_third_parties_aws_query_injection
  dynamodb.query(
     TableName='users',
     FilterExpression = event.body.filter,
     Select = "ALL_ATTRIBUTES"
  )

# simple db
def bad2(event, context):
   client = boto3.client('sdb')
  # bearer:expected python_third_parties_aws_query_injection
   client.select(
      SelectExpression = event.body.select_expr,
      NextToken = "string",
      ConsistentRead = true
   )

# dynamodb, simple db OK cases
def ok(event, context):   
  client = boto3.client('sdb')
  client.select(
    SelectExpression = "select * from 'users' where 'username' = 'john smith'",
    NextToken = "string",
    ConsistentRead = true
  )

  dynamodb = boto3.resource('dynamodb', '')
  users_table = dynamodb.Table('users')
  user_table.query(
    Select = 'ALL_ATTRIBUTES', 
    FilterExpression = {'username': event.body.username},
  )
  
  dynamodb = boto3.client('dynamodb')
  dynamodb.query(
    TableName='users',
    FilterExpression = {'username': event.body.username},
    Select = "ALL_ATTRIBUTES"
  )
