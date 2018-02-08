class Api::MessagesController < ApplicationController

  before_action :require_login 

  def index
    @messages = current_user.messages 
    if @messages 
      render json: @messages
    else 
      render json: @messages.errors.full_messages, status: 400
    end
  end

  def create
    @message = Message.new(message_params);
    @message.user_id = current_user.id
    if @message.save 
      CreateMessageJob.perform('chat_1', @message);
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