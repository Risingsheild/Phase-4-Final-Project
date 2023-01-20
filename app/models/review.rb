class Review < ApplicationRecord
    belongs_to :user
    belongs_to :game

    validates :comment, presence: true
    validates :comment, length: { maximum: 200, too_long: "%{count} characters is the maximum allowed"}

end
