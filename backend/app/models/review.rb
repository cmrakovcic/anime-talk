class Review < ApplicationRecord
  validates :body, presence: true
  belongs_to :anime
end
