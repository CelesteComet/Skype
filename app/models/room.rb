class Room < ApplicationRecord
  has_many :room_memberships
  has_many :messages

  has_many :users, through: :room_memberships
end
