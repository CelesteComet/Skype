class Message < ApplicationRecord
  validates :user_id, :room_id, :body, :status, presence: false

  belongs_to :user
  belongs_to :room 
end


