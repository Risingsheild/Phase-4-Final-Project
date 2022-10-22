class GamesController < ApplicationController

    def index
        render json: Game.all
    end

    def show 
        game = Game.find_by(id: params[:id])
        render json: game 
    end

    def create
        game = Game.create(
            title: params[:title],
            genre: params[:genre],
            image_url: params[:image_url]
        )
        render json: game, status: :created
    end
    
end
