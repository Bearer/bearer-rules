class MyController < ApplicationController
# bearer:expected ruby_rails_insecure_disabling_of_callback
  skip_before_action :access_control, except: :secure
end
