class User < ApplicationRecord
    has_secure_password
    has_many :categories, dependent: :destroy
    has_many :posts, dependent: :destroy
    has_many :comments, dependent: :destroy
    has_many :post_subscriptions, through: :subscriptions, source: :posts
    validates :username, length: {minimum: 3}, uniqueness: true
    validates :password, confirmation: true, length: {minimum: 8}
    validates :password_confirmation, presence: true
end
