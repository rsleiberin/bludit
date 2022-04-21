class PostWithCommentsSerializer < ActiveModel::Serializer
    attributes :id, :title, :content
    has_one :user
    has_one :category
    has_many :comments
end
