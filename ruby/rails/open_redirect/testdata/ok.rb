class OrdersController < ApplicationController
  def notify
    redirect_to some_route_url(params[:id]), status: :found
  end
end
