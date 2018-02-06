class Api::FriendshipsController < ApplicationController
  def index 
    @friends = current_user.friends
    
  end

  def create
  end

  def destroy
  end
end
