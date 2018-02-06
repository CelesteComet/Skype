class RoomMembership < ApplicationRecord
  validates :user_id, :room_id, presence: true
  belongs_to :user 
  belongs_to :room 
end
