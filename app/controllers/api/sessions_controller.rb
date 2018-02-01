class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(user_params[:username], user_params[:password]);
    if @user
      login(@user)
      render :template => "/api/sessions/create.json", locals: {user: current_user}
    else 
      render json: ["Incorrect username or password"], status: 404
    end
  end

  def destroy
    logout
    render json: {message: "logged out"}
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
