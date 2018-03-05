class WebNotificationsJob < ApplicationJob
  queue_as :default

  def self.perform(user, payload)
    puts "WALKDWLAKDAWLKDLWKDLWAKDLWAKDLWAKDLWAKDLAWKDLAKWDLKWADLKWLDK"
    print payload

    user.friends.each do |f|
      ActionCable.server.broadcast("web_notifications_#{f.id}", {
        :userId => user.id,
        payload.keys[0] => payload.values[0]
      })
    end
  end
end
