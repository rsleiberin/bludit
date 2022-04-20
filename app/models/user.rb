class User < ApplicationRecord
    has_secure_password
    has_many :moderations
    has_many :categories
    has_many :posts
    has_many :comments

end
