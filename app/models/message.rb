class Message < ApplicationRecord
  validates :user_id, :room_id, :body, :status, null: false
end


