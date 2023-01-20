class ReviewsController < ApplicationController

    def index 
        Review.all
    end
    
    ## Create Method

    def create 
        game = Game.find_by(id: params[:id])
        review = @current_user.reviews.create!(review_params.merge(game_id: game))
        if review 
            render json: review, status: :created
        else 
            render json: { error: "Review Needs a Comment"}, status: :length_required
        end
    end
    

    ## Update Method 

    def update 
        if review = current_user.reviews.find(params[:id])
            review.update!(review_params)
            render json: review 
        else 
            render json: { error: "Review Not Found"}, status: :not_found
        end
    end
    

    ## Destroy Method 

    def destroy 
        review = current_user.reviews.find(params[:id])
        review.destroy
        render json: {message: "Review Deleted"}
    end

    private 

    def review_params
        params.require(:comment, :game_id)
    end

end