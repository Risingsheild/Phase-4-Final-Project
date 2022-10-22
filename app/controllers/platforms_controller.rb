class PlatformsController < ApplicationController
    def index 
        render json: Platform.all
    end

    def show
        platform = Platform.find_by(id: params[:id])
        render json: platform
    end

    def create 
        platform = Platform.create(
           title: params[:title],
           image_url: params[:image_url]
        )

        render json: platform, status: :created
    end

end
