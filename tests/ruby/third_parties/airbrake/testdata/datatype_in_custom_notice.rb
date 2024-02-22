class MyException
  def initialize; end

# bearer:expected ruby_third_parties_airbrake
  def to_airbrake
    { params: { user: current_user.email } }
  end
end

Airbrake.notify(MyException.new)