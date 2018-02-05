# app/channels/chat_channel.rb
class ChatChannel < ApplicationCable::Channel
  # Called when the consumer has successfully
  # become a subscriber to this channel.
  def subscribed
    
    stream_from "chat_#{params[:room]}"

    ActionCable.server.broadcast(
      "chat_1", { title: "New things!", body: "All that's fit for print" }
    )
  end
end