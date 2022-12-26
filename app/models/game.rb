class Game < ApplicationRecord
    has_many :reviews 

    belongs_to :platform

    validates :title,  presence: true
end
