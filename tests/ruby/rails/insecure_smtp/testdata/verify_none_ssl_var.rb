Rails.application.configure do
  config.action_mailer.smtp_settings = {
# bearer:expected ruby_rails_insecure_smtp
    :openssl_verify_mode => OpenSSL::SSL::VERIFY_NONE
  }
end
