csv_string = CSV.generate do |csv|
	csv << ["email", "first_name", "last_name"]
	users.each do |user|
# bearer:expected ruby_lang_file_generation
		csv << [
			user.email,
			user.first_name,
			user.last_name
		]
	end
end
