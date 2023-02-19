class GamesController < ApplicationController
    skip_before_action :authorized, only: [:index, :show]

    def index
        render json: Game.all
    end

    def show
        game = Game.find(params[:id])
        render json: game 
    end
    

    def create
        game = Game.create!(game_params)
        if game
            render json: game, status: :created
        else 
            render json: { error: "Please fill out all information"}, status: :length_required
        end
    end
    
    private 

        def game_params
            params.permit(:title, :genre, :image_url, :platform_id)
        end


end
