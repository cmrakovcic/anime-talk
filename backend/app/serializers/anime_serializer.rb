class AnimeSerializer < ActiveModel::Serializer
    attributes :id, :title, :creator
    has_many :reviews 
end