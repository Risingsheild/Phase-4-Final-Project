class UsersController < ApplicationController

    def index 
        user = User.all
        render json: user 
    end
    
    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def show
        if @current_user
            render json: @current_user
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    private
   
    def user_params
        params.permit(:username, :password)
    end

end
