class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment, :game
  
  belongs_to :user
  belongs_to :game
end
