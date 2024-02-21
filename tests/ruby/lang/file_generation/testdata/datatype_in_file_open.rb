# bearer:expected ruby_lang_file_generation
File.open("users.log", "w") { |f| f.write "#{Time.now} - User #{user.email} logged in\n" }

File.open(user.emails, "users.csv", "w") do |f|
	users.each do |user|
# bearer:expected ruby_lang_file_generation
		f.write "#{user.email},#{user.first_name},#{user.last_name}"
	end
end