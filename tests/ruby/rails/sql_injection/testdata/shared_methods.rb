
# bearer:expected ruby_rails_sql_injection
User.where(username: "mish").count(params[:col])

# bearer:expected ruby_rails_sql_injection
user.posts.count(params[:col])

# safe uses of shared method
my_arr = [1, 2, 3, 2]
# ok
my_arr.count(params[:item])

ITEMS = [:apple, :carrot, "orange"]
ITEMS.count
ITEMS.count(:apple)

# bearer:expected ruby_rails_sql_injection
User.select("#{params[:oops]} AS oops")
# bearer:expected ruby_rails_sql_injection
user.posts.select("#{params[:oops]} AS oops")
