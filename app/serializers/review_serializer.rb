class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment, :user, :game
end
