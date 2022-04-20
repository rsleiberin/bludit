class CategoryWithPostsSerializer < ActiveModel::Serializer
    attributes :id, :title
    has_one :user
    has_many :posts
end