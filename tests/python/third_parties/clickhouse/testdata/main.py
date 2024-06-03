import clickhouse_connect

client = clickhouse_connect.get_client(host="clickhouse.cloud", port=8443, username="default", password="secret")
client.command('CREATE TABLE IF NOT EXISTS users (uuid String, email String) ORDER BY uuid')

row1 = [user1.uuid, user1.email]
row2 = [user2.uuid, user2.email]
data = [row1, row2]
# bearer:expected python_third_parties_clickhouse
client.insert('users', data, column_names=['uuid', 'email'])
