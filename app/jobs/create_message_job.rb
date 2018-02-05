class CreateMessageJob < ApplicationJob
  queue_as :default

  def self.perform(channel, payload)
    ActionCable.server.broadcast('chat_1', payload);
  end
end
