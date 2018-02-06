class Friendship < ApplicationRecord
  validates :user_id, :friend_id, presence: true

  belongs_to :user 

  belongs_to :friend,
  foreign_key: 'friend_id',
  class_name: 'User'
  
end
