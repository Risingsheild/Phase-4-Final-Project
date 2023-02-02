class ReviewsController < ApplicationController
    skip_before_action :authorized, only: [:index]

    def index 
        reviews = Review.all
        render json: reviews

    end
    
    ## Create Method

    def create 
        review = @current_user.reviews.create!(review_params)
            if review 
            render json: review, status: :created
        else 
            render json: { error: "Review Needs a Comment"}, status: :length_required
        end
    end
    

    ## Update Method 

    def update 
        if review = @current_user.reviews.find(params[:id])
            review.update!(comment: params[:comment])
            review.reload
            render json: review 
        else 
            render json: { error: "Review Not Found"}, status: :not_found
        end
    end
    

    ## Destroy Method 

    def destroy 
        review = @current_user.reviews.find(params[:id])
        review.destroy
        render json: {message: "Review Deleted"}
    end

    private 

    def review_params
        params.permit(:comment, :game_id)
    end

end