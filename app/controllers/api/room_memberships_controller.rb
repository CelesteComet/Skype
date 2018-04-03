class Api::RoomMembershipsController < ApplicationController

  before_action :require_login # check application controller

  def index
    @room_memberships = current_user.rooms.includes(:room_memberships)
    render json: @room_memberships
  end

  def create
    @room_membership = RoomMembership.new(room_membership_params)
    @room_membership.user_id = current_user.id

    if @room_membership.save
      render json: @room_membership
    else 
      render json: @room_membership.errors.full_messages, status: 400
    end
  end

  def destroy 
    @room_membership = Room.find_by(id: params[:id]).room_memberships.find_by(user_id: current_user.id);
    if @room_membership
      room_users_Ids = @room_membership.room.users.map {|f| f.id}
      @room_membership.destroy
      WebNotificationsJob.perform(room_users_Ids, 'fetch_rooms')
      render json: @room_membership
    else 
      render json: @room_membership.errors.full_messages, status: 400
    end
  end

  def room_membership_params
    params.require(:room_membership).permit(:room_id)
  end

end
