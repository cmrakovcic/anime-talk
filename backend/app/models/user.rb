class User < ApplicationRecord
    has_secure_password
    has_many :comments
    has_many :commented_animes, through: :comments, source: :anime

    validates :username, :email, presence: true
    validates :username, uniqueness: {scope: :username, message: "already exists"}
end
