# app/channels/appearance_channel.rb
class AppearanceChannel < ApplicationCable::Channel
  def subscribed
    print ("NEW APPEARED")
    stream_from "appearance_#{params[:id]}"

    ActionCable.server.broadcast(
      "appearance_1", { message: "${id} APPEARED!" }
    )
  end
end
