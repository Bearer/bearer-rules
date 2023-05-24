# frozen_string_literal: true

class UsersController
  def user_params
    params(:user).permit!(:name, :email, :admin)
  end
end