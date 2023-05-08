class OrdersController < ApplicationController
  def notify
    redirect_to params[:id], status: :found
  end
end
