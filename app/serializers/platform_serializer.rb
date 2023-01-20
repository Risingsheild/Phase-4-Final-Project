class PlatformSerializer < ActiveModel::Serializer
  attributes :id, :title, :image_url
  has_many :games
end
