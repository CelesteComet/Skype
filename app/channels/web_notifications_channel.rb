# app/channels/web_notifications_channel.rb
class WebNotificationsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "web_notifications_#{current_user.id}"
    current_user.notify_status(1)
  end

  def unsubscribed
    current_user.notify_status(0)
  end
end