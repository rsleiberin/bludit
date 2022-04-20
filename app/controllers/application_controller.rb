class ApplicationController < ActionController::API
    include ActionController::Cookies
    # before_action :authroized
    def authorized
        return render json: {error: "Not Authorized"}, status: :unauthroized
        unless session.include? :user_id
    end
end
