class WebNotificationsJob < ApplicationJob
  queue_as :default

  def self.perform(user, payload)
    user.friends.each do |f|
      ActionCable.server.broadcast("web_notifications_#{f.id}", {
        userId: user.id,
        status: payload 
      });
    end
  end
end
