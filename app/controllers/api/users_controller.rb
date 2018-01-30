class Api::UsersController < ApplicationController
  def create
    @user = User.new 
    if @user.save 
      render json: @user
    else 
      render json: @user.errors.full_messages
    end
  end

  def destroy
  end
end
