class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :genre, :image_url
  has_many :reviews 
  belongs_to :platform
end
