class OrdersController < ApplicationController
  def notify
    redirect_to some_route_url(params[:id]), status: :found
  end

  def orders
    redirect_to Rails.application.routes.url_helpers.orders_path(shop_id: params[:shop_id])
  end

  def show
    id = params[:user_id].to_i

    redirect_to organization.users.where(id: id)
  end
end
