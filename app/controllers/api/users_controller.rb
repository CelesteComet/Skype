class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    # temporary 
    @user.profile_id = SecureRandom.urlsafe_base64

    if @user.save 
      login(@user)
      render json: @user
    else 
      render json: @user.errors.full_messages, status: 401
    end
  end

  def search 
    @users = User.where("username LIKE ? and id NOT IN (?)", "%#{params[:search]}%", current_user.id)
  end

  def destroy
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
