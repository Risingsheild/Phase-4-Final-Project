class Game < ApplicationRecord
    has_many :reviews 

    belongs_to :platform

    validates :title, :genre, :image_url, :platform_id, presence: true
end
