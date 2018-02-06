class Api::RoomsController < ApplicationController

  def index
    @rooms = current_user.rooms.includes(:users)
  end

  
end
