require "net/ftp"

# bearer:expected ruby_lang_insecure_ftp
Net::FTP.open("ftp.site.com") do |ftp|
  file = Tempfile.new("user_data")
  begin
    file << [user.email, user.gender]
    file.close

    ftp.puttextfile(file.path, "/users/123.json")
  ensure
    file.close!
  end
end