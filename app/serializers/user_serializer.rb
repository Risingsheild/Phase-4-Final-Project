class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest 
  has_many :reviews
  has_many :games, through: :reviews

  def unique_games
        unique_games = object.games.uniq
      return unique_games
  end
end
