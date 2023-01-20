class ApplicationController < ActionController::API
    include ActionController::Cookies

    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

    before_action :authorized

    def authorized
        @current_user ||= User.find_by(id: session[:user_id])
        
        render json: {error: "Not Authorized"}, status: :unauthorized unless @current_user
    end

    private

    def record_invalid(exc)
        render json: { errors: exc.record.errors.full_messages }, status: :unprocessable_entity
    end

    def record_not_found(exc)
        render json: { error: "#{exc.model} not found"}, status: :not_found
    end
end
