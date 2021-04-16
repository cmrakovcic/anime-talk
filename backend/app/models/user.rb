class User < ApplicationRecord
    has_many :animes
    has_many :reviews, through: :animes
end
