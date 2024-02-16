fd = IO.sysopen("/dev/tty", "w")
IO.open(fd,"w") do |a|
# bearer:expected ruby_lang_file_generation
  a.puts "Hello, #{user.full_name}!"
end
