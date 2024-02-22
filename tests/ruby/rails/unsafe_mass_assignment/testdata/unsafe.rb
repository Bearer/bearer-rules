# frozen_string_literal: true

class UsersController
  def user_params
# bearer:expected ruby_rails_unsafe_mass_assignment
    params(:user).permit(:name, :email, :admin)
  end
end