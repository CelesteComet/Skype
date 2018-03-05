# app/channels/appearance_channel.rb
class AppearanceChannel < ApplicationCable::Channel
  def subscribed
    stream_from "notify_status"
  end

  def unsubscribed
    current_user.notify_status(0)
  end
end
