class MyController < ApplicationController
  def show_detailed_exceptions?
    false
  end
end

class OtherClass < Base
  def show_detailed_exceptions?
    foo
  end
end

config.consider_all_requests_local = false
