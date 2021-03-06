class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception

  helper_method :current_user, :peerjs_key
  before_action :set_application_variables

  def set_application_variables
    @peerjs_key = Figaro.env.peer_api_key
  end

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
  end

  def logout
    session[:session_token] = nil
  end

  def require_login
    if !current_user
      return false
    end
  end

  
end
