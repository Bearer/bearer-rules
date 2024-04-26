# bearer:expected ruby_rails_sql_injection
User.find_by(params[:oops])
# bearer:expected ruby_rails_sql_injection
find_by!("oops #{params[:oops]}")
# bearer:expected ruby_rails_sql_injection
User.joins("INNER JOIN #{params[:oops]}")
# bearer:expected ruby_rails_sql_injection
select("#{params[:oops]} AS oops")

# chained case
# bearer:expected ruby_rails_sql_injection
User
  .where("oops #{params[:one]}")
  .count("#{params[:two]}")

# bearer:expected ruby_rails_sql_injection
ActiveRecord::Base.connection.exec_query("SELECT #{params[:oops]}")

# bearer:expected ruby_rails_sql_injection
connection.select_all("SELECT #{params[:oops]}")

class Foo
  def bad(name)
    # bearer:expected ruby_rails_sql_injection
    connection.select_all("SELECT user WHERE name ='#{name}'")
  end
end
