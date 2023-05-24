# frozen_string_literal: true

class UsersController
  def create
    user_params = params(:user).permit!(:name, :email, :admin)
    User.new(user_params)
  end
end