class Api::RoomsController < ApplicationController

  def index
    @rooms = current_user.rooms.includes(:room_memberships)
  end

  def create
    @room = Room.create({});
    @room.room_memberships.create(room_id: @room.id, user_id: current_user.id)
    params[:room][:room_Ids].each do |id|
      @room.room_memberships.create(room_id: @room.id, user_id: id)
      payload = {
        action: 'fetch_rooms',
        roomId: @room.id
      }
      WebNotificationsJob.perform([id], 'notify_status', {data: payload})
    end

    if @room.save 
      render json: @room
    else 
      render json: @room.errors.full_messages
    end 
  end

  private

  def room_params
    params.require(:room).permit(:room_Ids)
  end

  
end
