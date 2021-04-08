class Anime < ApplicationRecord
    has_many :comments

    scope :alpha, -> { order(:title) }
end
