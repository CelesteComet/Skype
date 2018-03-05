class NotifyStatusJob < ApplicationJob
  queue_as :default

  def self.perform(userId, status)
    ActionCable.server.broadcast("notify_status", {
      userId: userId,
      status: status
    });
  end
end
