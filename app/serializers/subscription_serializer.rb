class SubscriptionSerializer < ActiveModel::Serializer
  attributes :id
  has_one :users
  has_one :posts
end
