# bearer:expected ruby_lang_ftp_using_user_input
Net::FTP.new(params[:oops])

# bearer:expected ruby_lang_ftp_using_user_input
Net::FTP.open("example.com", username: params[:user]) do

end

def handler(event:, context:)
  ftp = Net::FTP.open("example.com")
# bearer:expected ruby_lang_ftp_using_user_input
  ftp.puttextfile("local.txt", event["filename"])
end
