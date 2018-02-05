class Api::MessagesController < ApplicationController

  before_action :require_login 

  def create
    @message = Message.new(message_params);
    @message.user_id = current_user.id
    if @message.save 
      render json: @message
    else
      render json: @message, status: 400
    end
  end

  private

  def message_params
    params.require(:message).permit(:body, :room_id)
  end

end

# class Message < ApplicationRecord
#   validates :user_id, :room_id, :body, :status, presence: false

#   belongs_to :user
#   belongs_to :room 