class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :genre, :image_url, :reviews, :platform
end
