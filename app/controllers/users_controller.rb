class UsersController < ApplicationController

    #Session authentication on page load
    def show
        puts "showing"
        current_user = User.find(session[:user_id])
        render json: current_user
    end

    #Creating a user, password is digested due to "has_secure_password" class trait
    def create
        puts "creating"
        user = User.create!(user_params)
        render json: user
    end

    private
    #Strong params
    def user_params
        params.permit(:username, :password, :password_confirmation)
    end
    #Error Handling
    #--------------

    # users#create validation error
    def render_unprocessable_entity(invalid)
        render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
