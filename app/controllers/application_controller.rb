class ApplicationController < ActionController::API
    include ActionController::Cookies

    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

    def authorized
        return render json: {error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
    end

    private

    def record_invalid(exc)
        render json: { errors: exc.record.errors.full_messages }, status: :unprocessable_entity
    end

    def record_not_found(exc)
        render json: { error: "#{exc.model} not found"}, status: :not_found
    end
end
