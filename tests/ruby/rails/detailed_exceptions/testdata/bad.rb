class MyController < ApplicationController
# bearer:expected ruby_rails_detailed_exceptions
  def show_detailed_exceptions?
    foo
  end
end

# bearer:expected ruby_rails_detailed_exceptions
config.consider_all_requests_local = true
