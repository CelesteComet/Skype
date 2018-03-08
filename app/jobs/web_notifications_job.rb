class WebNotificationsJob < ApplicationJob
  queue_as :default

  def self.perform(receivers, payload)
    receivers.each do |id|
      ActionCable.server.broadcast("web_notifications_#{id}", {
        action: 'notify_presence',
        payload: payload
      })
    end
  end
end
