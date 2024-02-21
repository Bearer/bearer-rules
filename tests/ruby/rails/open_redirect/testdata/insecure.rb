class OrdersController < ApplicationController
  def notify
# bearer:expected ruby_rails_open_redirect
    redirect_to params[:id], status: :found
  end
end
