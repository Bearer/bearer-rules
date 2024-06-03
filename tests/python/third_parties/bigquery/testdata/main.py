from google.cloud import bigquery

def insert_user():
  client = bigquery.Client()
  dataset_ref = client.dataset("my_dataset")
  table_ref = dataset_ref.table("my_table")
  
  schema = [
    bigquery.SchemaField("id", "INTEGER", mode="REQUIRED"),
    bigquery.SchemaField("username", "INTEGER", mode="REQUIRED"),
    bigquery.SchemaField("email", "INTEGER", mode="REQUIRED"),
  ]
  
  rows = [
    { "id": user.id, "username": user.username, "email": user.email}
  ]
  
  # bearer:expected python_third_parties_bigquery
  errors = client.insert_rows(table_ref, rows, selected_fields=schema)
  print("Insert errors: ", errors)
