class Foo
  def bad(external_input, external_user_id)
    db = SQLite3::Database.new 'test.db'

    query = "SELECT * FROM users WHERE username = '#{external_input}'"
    # bearer:expected ruby_lang_sql_injection
    db.execute(query)
    # bearer:expected ruby_lang_sql_injection
    db.query(query)
    # bearer:expected ruby_lang_sql_injection
    db.query("SELECT * FROM users WHERE username = '#{external_input}' AND id = ?", [external_user_id])
  end

  def bad_block(external_input)
    SQLite3::Database.new("data.db") do |db|
      # bearer:expected ruby_lang_sql_injection
      db.execute("SELECT * FROM users WHERE username = '#{external_input}'")
    end
  end

  def ok(external_input)
    db = SQLite3::Database.new 'test.db'
    result = db.query("select * from users where id = ?", [external_input])
  end
end