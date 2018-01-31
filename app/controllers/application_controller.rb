class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def current_user
    @user = @user || User.find_by(session: session[:session_token])
  end

  def login(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
  end

  def logout(user)
    session[:session_token] = nil
  end

  
end
