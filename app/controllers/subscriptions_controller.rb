class SubscriptionsController < ApplicationController

    def create
        render json: Subscription.create(subscription_params), status: :created
    end

    def index
    end

    def destroy
    end
    private
    def subscription_params
        params.permit(:user_id, :post_id)
    end
end