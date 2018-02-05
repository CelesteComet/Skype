class Message < ApplicationRecord
  validates :user_id, :room_id, :body, :status, presence: true

  belongs_to :user
  belongs_to :room 
end


