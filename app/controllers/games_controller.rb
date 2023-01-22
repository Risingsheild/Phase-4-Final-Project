class GamesController < ApplicationController
    skip_before_action :authorized, only: [:index]

    def index
        render json: Game.all
    end

    def create
        game = Game.create!(
            title: params[:title],
            genre: params[:genre],
            image_url: params[:image_url],
            platform_id: params[:platform_id]
        )
        if game
            render json: game, status: :created
        else 
            render json: { error: "Please fill out all information"}, status: :length_required
        end
    end
    
end
