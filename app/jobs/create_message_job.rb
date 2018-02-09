class CreateMessageJob < ApplicationJob
  queue_as :default

  def self.perform(channel, payload)
    ActionCable.server.broadcast(channel, payload);
  end
end
