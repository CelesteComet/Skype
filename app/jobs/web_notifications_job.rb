class WebNotificationsJob < ApplicationJob
  queue_as :default

  def self.perform(receivers, action, payload)
    puts "BROADCSTING"
    receivers.each do |id|
      ActionCable.server.broadcast("web_notifications_#{id}", {
        action: action,
        payload: payload
      })
    end
  end



end
