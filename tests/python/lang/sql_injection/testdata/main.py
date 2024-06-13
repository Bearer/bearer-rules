user_input = input()

def generic():
    cursor = conn.cursor()

    cursor.callproc("SELECT * FROM x WHERE y = :foo", { "foo": user_input })
    # bearer:expected python_lang_sql_injection
    cursor.callproc(user_input, { "foo": 42 })
    cursor.execute("SELECT * FROM x WHERE y = ?", [user_input])
    # bearer:expected python_lang_sql_injection
    cursor.execute("SELECT * FROM " + user_input, { "foo": 42 })

    with connection.cursor() as c:
        c.executemany("UPDATE bar SET foo = 1 WHERE baz = :b", { "b": user_input })
        # bearer:expected python_lang_sql_injection
        c.executemany(f"UPDATE bar SET foo = 1 WHERE baz = {user_input}", {})

def asyncpg():
  import asyncpg
  conn = await asyncpg.connect(user='mish', password='password')
  query = "SELECT * FROM bar WHERE foo=" + user_input
  # bearer:expected python_lang_sql_injection
  values = await conn.fetch(query)   
  await conn.close()
  
def pg8000():
  import pg8000.native as pg
  import pg8000.dbapi
  conn = pg.Connection("postgres", password="password")
  query = "SELECT * FROM bar WHERE foo=" + user_input
  # bearer:expected python_lang_sql_injection
  values = await conn.run(query)

def sqlalchemy():
    from sqlalchemy import create_engine, text

    engine = create_engine('sqlite:///example.db')

    with engine.connect() as sqlalcon:
        result = sqlalcon.execute(text("SELECT * FROM :x"), { "x": user_input })
        # bearer:expected python_lang_sql_injection
        result = sqlalcon.execute(text(f"SELECT * FROM {user_input}"))

def bad2(scenario: dict, conn):
  query = f"INSERT INTO scenario (config_id) VALUES ({scenario['config_id']})"
  # bearer:expected python_lang_sql_injection
  conn.execute(query)
  conn.commit()


def mysql_connector_sanitizer():
    import mysql.connector
    from mysql.connector.conversion import MySQLConverter

    conn = mysql.connector.connect()
    converter = MySQLConverter(conn)
    cursor = conn.cursor()

    # bearer:expected python_lang_sql_injection
    cursor.execute(user_input)
    cursor.execute(converter.escape(user_input))

def pymysql_sanitizer():
    import pymysql

    conn = pymysql.connect()
    cursor = conn.cursor()

    # bearer:expected python_lang_sql_injection
    cursor.execute(user_input)
    cursor.execute(conn.escape_string(user_input))

def psycopg_sanitizer():
    import psycopg2
    import psycopg2.extensions

    conn = psycopg2.connect(database="your_database")
    cursor = conn.cursor()

    # bearer:expected python_lang_sql_injection
    cursor.execute(user_input)
    cursor.execute(psycopg2.extensions.adapt(user_input).getquoted())