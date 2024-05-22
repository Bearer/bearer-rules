user_input = input()

User.objects.raw(f"SELECT * FROM x WHERE y = ?", [user_input])
# bearer:expected python_django_sql_injection
User.objects.raw(f"SELECT * FROM x WHERE y = {user_input}", [])

import pymysql
safe = pymysql.connect().escape_string(user_input)
User.objects.raw(f"SELECT * FROM x WHERE y = {safe}", [])

