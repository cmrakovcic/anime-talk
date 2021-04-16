class User < ApplicationRecord
    has_secure_password
    has_many :animes
    has_many :reviews, through: :animes
end
