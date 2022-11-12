class ReviewsController < ApplicationController
    
    def index 
        render json: Review.all
    end

    def show 
        review = Review.find_by(id: params[:id])
        render json: review
    end


    ## Create Method

    def create 
        review = Review.create(
            comment: params[:comment], 
            user_id: params[:user_id], 
            game_id: params[:game_id]
        )
        render json: review, status: :created
    end

    ## Update Method 

    def update 
        review = Review.find_by(id: params[:id])
        if review
            review.update(review_params)
            render json: review 
        else 
            render json: { error: "Review Not Found"}, status: :not_found
        end
    end
    

    ## Destroy Method 

    def destroy 
        review = Review.find_by(id: params[:id])
        if review 
            review.destroy
            head :no_content
        else
            render json: { error: "Review Not Found"}, status: :not_found
        end
    end

    private 

    def review_params
        params.permit(:comment)
    end

end