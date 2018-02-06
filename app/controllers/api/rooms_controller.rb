class Api::RoomsController < ApplicationController

  def index
    @rooms = current_user.rooms.includes(:room_memberships)
  end

  
end
