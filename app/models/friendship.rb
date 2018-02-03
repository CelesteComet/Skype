class Friendship < ApplicationRecord
  validates :user_id, :friend_id, presence: true
end
