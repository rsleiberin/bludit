class User < ApplicationRecord
    has_secure_password
    has_many :moderations
    has_many :categories
    has_many :posts
    has_many :comments
    validation :username, length: {minimum: 3}
    validation :password, confirmation: {case_sensitive: true}, length: {minimum: 8}

end
