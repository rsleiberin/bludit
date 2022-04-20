class User < ApplicationRecord
    has_secure_password
    has_many :categories, dependent: :destroy
    has_many :posts, dependent: :destroy
    has_many :comments, dependent: :destroy
    validation :username, length: {minimum: 3}
    validation :password, confirmation: {case_sensitive: true}, length: {minimum: 8}

end
