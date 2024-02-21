class UsersController < ApplicationController
# bearer:expected ruby_rails_insecure_http_password
    http_basic_authenticate_with name: "foo", password: "my-secret-password"
  
    def index
    end
  end