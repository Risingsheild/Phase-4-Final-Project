class SessionsController < ApplicationController
    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { error: {login: "Invalid username or password"} }, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end
end

#Create a custom route which sends in a key word and returns the first game 
# which has a review with that one key word in the comment of the review. 
#If no reviews are found that have that key word, return an error message.


# get '/first' to: reviewcontroller, => method first review.where(:comment = ? (params[:word]))

# custom route, Controller, to a new method to find the first matching review with the word , if nil need error message